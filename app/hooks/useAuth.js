import React, { useEffect } from 'react';
import {createAction} from '../utils/createAction';
import {sleep} from '../utils/sleep';
import * as SecureStore from 'expo-secure-store';
import * as firebase from "firebase";

export function useAuth() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'SET_USER':
          return {
            ...state,
            user: {...action.payload},
          };
        case 'REMOVE_USER':
          return {
            ...state,
            user: undefined,
          };
        case 'SET_LOADING':
          return {
            ...state,
            loading: action.payload,
          };
        default:
          return state;
      }
    },
    {
      user: undefined,
      error: 0,
      loading: true,
    },
  );
  const auth = React.useMemo(
    () => ({
      login: async (email, password, type) => {
          const userData = {email, password, type};

          SecureStore.setItemAsync('user', JSON.stringify(userData));
          dispatch(createAction('SET_USER', userData));
      },
        loginWithFacebook: async (token) => {
            // Get the user's name using Facebook's Graph API
            const credential = firebase.auth.FacebookAuthProvider.credential(token);

            await firebase.auth().signInWithCredential(credential).then(data => {
                const userData = {
                    email: data.user.email,
                    uid: data.user.uid,
                    name: data.user.displayName,
                    phone: data.user.phoneNumber ? data.user.phoneNumber : null,
                    photo: data.user.photoURL,
                    type: 1,
                    red: true
                };

                firebase.firestore().collection('users').doc(userData.email).get().then((result) => {
                   if (!result.exists) {
                       firebase.firestore().collection('users').doc(userData.email).set(userData);
                   }
                    SecureStore.setItemAsync('user', JSON.stringify(userData));
                    dispatch(createAction('SET_USER', userData));
                });
            });
        },

        loginWithGoogle: async (result) =>{
            const { idToken, accessToken } = result;
            const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
            await firebase.auth().signInWithCredential(credential).then(data => {
                const userData = {
                    email: data.user.email,
                    uid: data.user.uid,
                    name: data.user.displayName,
                    phone: data.user.phoneNumber ? data.user.phoneNumber : null,
                    photo: data.user.photoURL,
                    type: 1,
                    red: true
                };

                firebase.firestore().collection('users').doc(userData.email).get().then((result) => {
                    if (!result.exists) {
                        firebase.firestore().collection('users').doc(userData.email).set(userData);
                    }
                    SecureStore.setItemAsync('user', JSON.stringify(userData));
                    dispatch(createAction('SET_USER', userData));
                });
            });
        },
      logout: async () => {
        dispatch(createAction('REMOVE_USER'));
        await SecureStore.deleteItemAsync('user');
      },
      checkEmail: async (email) => {
        await firebase.auth().fetchSignInMethodsForEmail(email).then(result => {
          return result;
        });
      },
      recover: async (email) => {
        await firebase.auth().sendPasswordResetEmail(email)
            .then(function() {
            });
      },
    }),
    [],
  );

  useEffect(() => {
    let mounted = true;

    if(mounted) {
      sleep(2000).then(() => {
        SecureStore.getItemAsync('user').then(user => {
          if (user) {
            dispatch(createAction('SET_USER', JSON.parse(user)));
          }
          dispatch(createAction('SET_LOADING', false));
        });
      });
    }

    return () => mounted = false;
  }, []);
  return {auth, state, dispatch};
}

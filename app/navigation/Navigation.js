import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from "../context/AuthContext";
import {UserContext} from "../context/UserContext";
import {useAuth} from '../hooks/useAuth';
import {AuthStackNavigator} from './AuthStackNavigator';
import Loading from "../component/LoadingInitial";
import {DrawerNavigator} from "./DrawerNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

export default () => {
    const {auth, state} = useAuth();

    function renderScreens() {
        if (state.loading) {
            return <RootStack.Screen name={'Loading'} component={Loading} initialParams={{ isVisible: state.loading, text: "Cargando.." }}/>;
        }

        return state.user ? (
          <RootStack.Screen name={'MainStack'} options={{ headerShown: false }}>
            {() => (
              <UserContext.Provider>
                <DrawerNavigator />
              </UserContext.Provider>
            )}
          </RootStack.Screen>
        ) : (
          <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} options={{ headerShown: false }}/>
        );
    }

    return (
        <AuthContext.Provider value={auth}>
            <NavigationContainer>
                <RootStack.Navigator
                    headerMode="none"
                >
                    {renderScreens()}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

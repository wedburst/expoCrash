import React, {useEffect, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {AuthContext} from '../context/AuthContext';

export function DrawerContent(props) {
    const {logout} = React.useContext(AuthContext);

    function navigator(screen) {
        props.navigation.navigate("Home", { screen: screen });
    }

    useEffect( () => {
    });

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.containerAvatar}>
                            <View style={styles.radiusImage}>
                                <Image
                                    style={styles.imageAvatar}
                                    source={require('../../assets/avatar.png')}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop: 5, marginBottom: 10}}>
                            <View style={{flexDirection:'column', alignContent: 'center', alignItems: 'center', width: '100%'}}>
                                <Text>Felix Martinez</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableHighlight style={styles.contactUsContainer} onPress={() => navigator('ProfileScreen')}>
                        <Text>Perfil</Text>
                    </TouchableHighlight>
                    <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1}} />
                    <TouchableHighlight style={styles.contactUsContainer} onPress={() => navigator('ProfileScreen')}>
                        <Text>Compartir App</Text>
                    </TouchableHighlight>
                    <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1}} />
                    <TouchableHighlight style={styles.contactUsContainer} onPress={() => navigator('RateScreen')}>
                        <Text>Rate</Text>
                    </TouchableHighlight>
                    <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1}} />
                    <TouchableHighlight style={styles.contactUsContainer} onPress={() => navigator('HelpScreen')}>
                        <Text>Ayuda</Text>
                    </TouchableHighlight>
                    <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1}} />
                    <TouchableHighlight style={styles.contactUsContainer} onPress={() => navigator('InfoScreen')}>
                        <Text>Información</Text>
                    </TouchableHighlight>
                    <View style={{borderBottomColor: '#ccc', borderBottomWidth: 1}} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
                <TouchableHighlight style={styles.contactUsContainer}
                    onPress={async() => {
                        await logout();
                    }}
                >
                    <Text>CERRAR SESIÓN</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        backgroundColor: 'red',
        marginTop: -30
    },
    radiusImage: {
        borderWidth: 1,
        borderRadius: 74,
        padding: 4,
        borderColor: '#ccc',
        shadowColor: "#999",
        elevation: 4,
        backgroundColor: 'white',
        shadowOpacity: 1,
        shadowRadius: 24
    },
    containerAvatar: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        alignContent: 'center',
    },
    imageAvatar: {
        height: 100,
        width: 100,
        borderWidth: 0,
        borderRadius: 70,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    bottomDrawerSection: {
        marginBottom: (Platform.OS === 'ios') ? 15 : 0,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        backgroundColor: 'red'
    },
    contactUsContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 1
    },
    contactUsContainer3: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingLeft: 10,
        marginBottom: 1
    },
    positionIcon: {
        position: 'absolute',
        right: 10
    },
    positionIcon2: {
        position: 'absolute',
        right: 5
    },
    contactUsContainer2: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingLeft: 15,
        marginBottom: 1,
        marginLeft: 25
    },
    divider: {
        backgroundColor: "#22324E",
        marginBottom: 10,
        marginHorizontal: 12,
        paddingVertical: 1
    },
    activeMenu: {
        width: 5,
        height: '94%',
        backgroundColor: 'red',
        position: 'absolute'
    }
  });

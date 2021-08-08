import React from 'react'
import {ImageBackground, StyleSheet, Dimensions, ActivityIndicator, View} from "react-native";

const {width, height} = Dimensions.get('window');

export default function LoadingApp(props) {
    return (
        <ImageBackground style={styles.containerImage} source={require('../../assets/splash.png')}>
            <ActivityIndicator size="large" color="#000000"/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerImage: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

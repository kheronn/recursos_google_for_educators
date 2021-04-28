import React from 'react';
import { View, StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';

import animationGoogle from '../assets/google-home.json';

export function Load() {
    return (
        <View style={styles.container}>
            <LottieView
                source={animationGoogle}
                autoPlay
                loop
                style={styles.animation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animation: {
        backgroundColor: 'transparent',
        width: 250,
        height: 250

    }
})
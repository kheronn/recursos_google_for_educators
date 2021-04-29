import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';

export function Header(props: { name: string, category: string, image: any }) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>{props.name}</Text>
                <Text style={styles.userName}>{props.category}</Text>
            </View>

            <Image
                style={styles.image}
                source={props.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40,
    }

})
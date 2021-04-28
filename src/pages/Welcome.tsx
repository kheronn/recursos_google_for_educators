import React from 'react';

import { useNavigation } from "@react-navigation/native";
import {
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import imgWelcome from '../assets/welcome.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';



export function Welcome() {

    const navigation = useNavigation();

    function handleHome() {
        navigation.navigate('Home');
    }

    return (
        <SafeAreaView style={styles.container}>

            <Image source={imgWelcome}
                resizeMode='contain'
                style={styles.image} />

            <Text style={styles.welcomeMsg}>
                Encontre os diversos Recursos Google  para sua formação.
                
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={handleHome}
            >
                <Text>
                    <Feather
                        name="chevron-right"
                        style={styles.icon} />
                </Text>
            </TouchableOpacity>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 25
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    welcomeMsg: {
        fontSize:18,
        textAlign: 'center',
        fontFamily: fonts.text

    },
    button: {
        backgroundColor: colors.primary_blue,
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.white,
        marginBottom: 10,
        borderRadius: 16,
        height: 56,
        width: 92,
    },
    icon: {
        color: colors.white,
        fontSize: 24,
    }

})
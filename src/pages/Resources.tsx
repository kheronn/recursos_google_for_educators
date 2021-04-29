import React from 'react';


import { useRoute } from "@react-navigation/native";
import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';
import { Resource } from "../models/Resource";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from '../components/Header';
import api from '../services/api';

interface Params {
    resources: Resource[]
    category: string,
    image: string,
}


export function Resources() {

    const route = useRoute();
    const { resources, category, image } = route.params as Params

    return (
        <View style={styles.container}>
            <Header name="" category={category} image={image} />

            <View style={styles.resources}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        backgroundColor: colors.background,
    },
    spotlight: {
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,

        borderRadius: 20,
        height: 110,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spotlightImage: {
        width: 60,
        height: 60,
    },
    spotlightText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 10,
        textAlign: 'justify'
    },
    resources: {
        flex: 1,
        width: '100%',
    },
    resourcesTitle: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 10,
    }
})




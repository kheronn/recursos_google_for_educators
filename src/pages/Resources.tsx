import React, { useState } from 'react';


import { useRoute } from "@react-navigation/native";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Linking,
    Share
} from 'react-native';
import { Resource } from "../models/Resource";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { Header } from '../components/Header';
import api from '../services/api';
import { ResourceCard } from '../components/ResourceCard';
import { SearchBar } from '../components/SearchBar';

interface Params {
    resources: Resource[]
    category: string,
    image: string,
}


export function Resources() {

    const route = useRoute();
    const { resources, category, image } = route.params as Params

    const [resourcesFiltered, setResourcesFiltered] = useState(resources);

    

    async function handleShare(resource: Resource) {
        try {
            const result = await Share.share({
                message: resource.link,
            })
        } catch (erro) { }
    }
    async function handleOpen(resource: Resource) {
        try {
            Linking.canOpenURL(resource.link).then(supported => {
                if (supported) {
                    Linking.openURL(resource.link)
                }
            })
        } catch (erro) { }
    }

    function handleSearch(query: string) {
        const data = resources.filter((resource) =>
            resource.titulo
                .toLowerCase()
                .match(query.toLowerCase()))

        setResourcesFiltered(data);

    }

    return (
        <View style={styles.container}>
            <Header name="" category={category} image={image} />

            <View style={styles.resources}>
                <FlatList
                    data={resourcesFiltered}
                    keyExtractor={(item) => String(item.titulo)}
                    renderItem={({ item }) => (
                        <ResourceCard
                            handleShare={() => { handleShare(item) }}
                            handleOpen={() => { handleOpen(item) }}
                            data={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={<SearchBar handleSearch={handleSearch} />}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
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
        fontSize: 14,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 10,
    }
})




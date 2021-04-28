import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import { CategoryCard } from '../components/CategoryCard';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { Category } from '../models/Category.model';
import { Resource } from '../models/Resource';
import api from '../services/api';



export function Home() {
    const [load, setLoad] = useState(true);
    const [resources, setResources] = useState<Resource[]>([]);


    async function fetchResources() {
        const data = await api.get<Resource[]>('');
        setResources(data.data)
    
        setTimeout(() => {
            setLoad(false);
        }, 5000)

    }

    function handleCategory(category: Category) {
        switch (category.name) {
            case 'Trilhas autoformativas':
             //   const resourcesFiltered = resources.filter((resource) => resource.publico === 'trilha')
                console.log(resources.length)
                break;
            case 'Aluno':

                break;
            case 'Professor':

                break;

            default:
                // Problemas/Soluções
                break;
        }
    }

    useEffect(() => {
        fetchResources();
    }, []);




    if (load) return <Load />

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Header />
            </View>

            <View style={styles.categories}>
                <FlatList
                    data={[
                        { name: 'Trilhas autoformativas', image: require('../assets/trilha.png') },
                        { name: 'Problemas/Soluções', image: require('../assets/problem.png') },
                        { name: 'Professor', image: require('../assets/teacher.png') },
                        { name: 'Aluno', image: require('../assets/student.png') }
                    ]}
                    keyExtractor={(item) => String(item.name)}
                    renderItem={({ item }) =>
                    (
                        <CategoryCard
                            data={item}
                            onPress={() => handleCategory(item)

                            }
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                />
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    header: {
        paddingHorizontal: 30
    },
    categories: {
        flex: 1,
        paddingHorizontal: 5,
        justifyContent: 'center'
    },

})


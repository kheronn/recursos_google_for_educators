import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {

    View,
    StyleSheet,
    FlatList,

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

    const navigation = useNavigation();

    async function fetchResources() {
        const data = await api.get('');
        setResources(data.data.recursos)

        setTimeout(() => {
            setLoad(false);
        }, 5000)

    }

    function navigate(listResources:Resource[], category:string, image:string){
        navigation.navigate('Resources', {
            resources: listResources,
            category: category,
            image: image
        });
    }    

    function handleCategory(category: Category) {
        switch (category.name) {
            case 'Trilhas autoformativas':
                let resourcesFiltered = resources.filter((resource) => resource.publico === 'trilha')
                navigate(resourcesFiltered, category.name, category.image)
                break;
            case 'Aluno':
                resourcesFiltered = resources.filter((resource) => resource.publico === 'aluno')
                navigate(resourcesFiltered, category.name, category.image)
                break;
            case 'Professor':
                resourcesFiltered = resources.filter((resource) => resource.publico === 'professor')
                navigate(resourcesFiltered, category.name, category.image)
                break;

            default:
                // Problems/Solutions
                resourcesFiltered = resources.filter((resource) => resource.categoria === 'Solução de problemas')
                navigate(resourcesFiltered, 'Solução de problemas', category.image)
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
                <Header name="Ola" category="Educador" image={require('../assets/teacher_avatar.png')} />
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
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    header: {
        paddingHorizontal: 30,
        marginTop: 20
    },
    categories: {
        flex: 1,
        paddingHorizontal: 5,
        marginTop: 30,
        justifyContent: 'space-around'
    },

})


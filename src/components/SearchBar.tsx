import React from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TextInputProps,

} from 'react-native';
import colors from '../styles/colors';


interface SearchBarProps extends TextInputProps {
    handleSearch: (query: string) => void;
}


export function SearchBar({ handleSearch, ...rest }: SearchBarProps) {
    return (
        <View style={styles.container}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={queryText => handleSearch(queryText)}
                placeholder="Pesquisar"
                style={styles.txtSearch}                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 5,
        flex:1
    },
    txtSearch: {
        borderRadius: 25,
        borderWidth: 1,
        padding:10,
        width:'100%'

    }
})
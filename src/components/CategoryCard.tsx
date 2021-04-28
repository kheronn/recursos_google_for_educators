import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface CategoryProps extends RectButtonProps {
    data: {
        name: string;
        image: any;
    }
}

export const CategoryCard = ({ data, ...rest }: CategoryProps) => {
    return (
        <View >
            <RectButton
                style={styles.containerButton}
                {...rest}
            >
                <Image
                    source={data.image}
                    width={80}
                    height={80} />
                <Text style={styles.text}>
                    {data.name}
                </Text>

            </RectButton>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    containerButton: {
        flex: 1,
        width: 135,
        height:135,
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 20,
        alignItems: 'center',
        margin: 10
    },
    text: {
        color: colors.primary,
        fontFamily: fonts.heading,
        textAlign:'center',
        marginVertical: 16
    }
})

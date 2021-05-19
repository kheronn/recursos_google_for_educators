import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Animated,
    TouchableOpacity,
    Share
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import colors from '../styles/colors';

interface ResourceProps extends RectButtonProps {
    data: {
        titulo: string;
        autoria: string;
        link: string;
        tipo: string;
    }
    handleShare: () => void;
    handleOpen: () => void;
}

export const ResourceCard = ({ data, handleShare, handleOpen, ...rest }: ResourceProps) => {
    return (
        <Swipeable
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View>
                    <View>
                        <RectButton
                            style={styles.buttonShare}
                            onPress={handleShare}
                        >
                            <Entypo name="share" style={{ color: colors.white }} size={32} />

                        </RectButton>
                    </View>
                </Animated.View>
            )}

        >
            <TouchableOpacity
                onPress={handleOpen}
            >
                <View style={styles.row}>
                    {data.tipo == 'video' &&
                        <Feather name="video" style={styles.pic} size={48} />
                    }
                    {data.tipo == 'link' &&
                        <AntDesign name="book" style={styles.pic} size={48} />
                    }

                    <View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameTxt}>{data.titulo}</Text>
                        </View>
                        <View style={styles.end}>
                            <Text style={styles.autoria}>{data.autoria}</Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>
        </Swipeable >
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#dcdcdc',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        padding: 10,
        justifyContent: 'space-between',
        shadowColor: '#00000021',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 5,
        margin: 8,
        borderRadius: 30,

    },
    pic: {
        borderRadius: 25,
        width: 50,
        height: 50,
        color: colors.primary_blue
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 270,
    },
    nameTxt: {
        marginLeft: 15,
        fontWeight: '600',
        color: '#222',
        fontSize: 15,

    },
    mblTxt: {
        fontWeight: '200',
        color: '#777',
        fontSize: 13,
    },
    end: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    autoria: {
        fontWeight: '400',
        color: colors.red,
        fontSize: 12,
        marginLeft: 15

    },
    buttonShare: {
        width: 80,
        height: 65,
        backgroundColor: colors.green,
        marginTop: 15,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        right: 15,
        paddingLeft: 10
    }

})

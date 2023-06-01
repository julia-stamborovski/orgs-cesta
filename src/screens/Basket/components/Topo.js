import React from 'react';
import { Image , StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;

import topo from '../../../../assets/topo.png';
import TextBasket from '../../../components/TextBasket';
export default function Topo() {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <TextBasket style={styles.title}>Detalhe da Cesta</TextBasket>
        </>
    );
}

const styles = StyleSheet.create({ 
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: '#fff',
        fontWeight: 'bold',
        padding: 16,
    },
})
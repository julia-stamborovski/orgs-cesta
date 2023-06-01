import React from 'react';
import { Image, StyleSheet, Dimensions, Text, SafeAreaView} from 'react-native';
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Basket() {
    return (
        <SafeAreaView>
        <Image source={topo} style={styles.topo} />
        <Text style={styles.title}>Detalhes da Cesta</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create(
    {
        topo: {
            width: '100%',
            height: 578 / 768 * width,
        
        },
        title: {
            width: '100%',
            position: 'absolute',
            textAlign: 'center',
            fontSize: '16px',
            lineHeight: 26,
            color: '#fff',
            fontWeight: 'bold',
            padding: 16,
        }
    }
);
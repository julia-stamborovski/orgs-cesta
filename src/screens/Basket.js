import React from 'react';
import { Image, StyleSheet, Dimensions, Text, SafeAreaView, View} from 'react-native';
import topo from '../../assets/topo.png'
import imageFarm from '../../assets/logo.png'

const width = Dimensions.get('screen').width;

export default function Basket() {
    return (
    <SafeAreaView>
        <Image source={topo} style={styles.topo} />
        <Text style={styles.title}>Detalhe da Cesta</Text>

        <View style={styles.Basket}>
            <Text style={styles.nameBasket}>Cesta de Verduras</Text>

            <View style={styles.farm}>
                <Image source={imageFarm}  style={styles.imageFarm}/>
                <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
            </View>

            <Text style={styles.descriptionBasket}>
                Uma cesta com produtos selecionados cuidadosamente 
                da fazenda direto para sua cozinha.</Text>
            <Text style={styles.priceBasket}>R$ 40,00</Text>
        </View>
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
        },
        Basket : {
            paddingVertical: 8, 
            paddingHorizontal: 16,
        },
        nameBasket: {
            color: '#464646',
            fontSize: 26,
            lineHeight: 42,
            fontWeight: 'bold'
        },
        farm:{
            flexDirection: 'row',
            paddingVertical: 12,
        },
        imageFarm: {
            width: 32,
            height: 32,
        },
        nameFarm: {
            fontSize: 16,
            lineHeight: 26,
            marginLeft: 12,
        },
        descriptionBasket: {
            color: '#A3A3A3',
            fontSize: 16,
            lineHeight: 26
        },
        priceBasket: {
            color: '#2A9F85',
            fontWeight: 'bold',
            fontSize: 26,
            lineHeight: 42,
            marginTop: 8,
        },
    }
);
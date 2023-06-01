import React from 'react';
import { Image, StyleSheet, Dimensions, Text, SafeAreaView, View} from 'react-native';
import TextBasket from '../components/TextBasket';
import topo from '../../assets/topo.png'
import imageFarm from '../../assets/logo.png'
const width = Dimensions.get('screen').width;

export default function Basket() {

    return (
    <SafeAreaView>
        <Image source={topo} style={styles.topo} />
        <TextBasket style={styles.title}>Detalhe da Cesta</TextBasket>

        <View style={styles.Basket}>
            <TextBasket style={styles.nameBasket}>Cesta de Verduras</TextBasket>

            <View style={styles.farm}>
                <Image source={imageFarm}  style={styles.imageFarm}/>
                <TextBasket style={styles.nameFarm}>Jenny Jack Farm</TextBasket>
            </View>

            <TextBasket style={styles.descriptionBasket}>
                Uma cesta com produtos selecionados cuidadosamente 
                da fazenda direto para sua cozinha.</TextBasket>
            <TextBasket style={styles.priceBasket}>R$ 40,00</TextBasket>
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
            fontSize: 16,
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
            fontWeight: 'bold',
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
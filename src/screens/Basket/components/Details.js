import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import TextBasket from '../../../components/TextBasket';
import imageFarm from '../../../../assets/logo.png'
export default function Details() {
    return (
        <>
        <TextBasket style={styles.nameBasket}>Cesta de Verduras</TextBasket>
          <View style={styles.farm}>
                <Image source={imageFarm}  style={styles.imageFarm}/>
                <TextBasket style={styles.nameFarm}>Jenny Jack Farm</TextBasket>
            </View>

            <TextBasket style={styles.descriptionBasket}>
                Uma cesta com produtos selecionados cuidadosamente 
                da fazenda direto para sua cozinha.</TextBasket>
            <TextBasket style={styles.priceBasket}>R$ 40,00</TextBasket>
        </>
    )
}

const styles = StyleSheet.create({ 
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
})

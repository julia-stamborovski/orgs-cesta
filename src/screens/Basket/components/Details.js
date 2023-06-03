import React from 'react';
import { Image, StyleSheet, View , TouchableOpacity} from 'react-native';
import TextBasket from '../../../components/TextBasket';

export default function Details({name, logoFarm, nameFarm, description, price, buttonBuy}) {
    return (
        <>
        <TextBasket style={styles.nameBasket}>{name}</TextBasket>
          <View style={styles.farm}>
                <Image source={logoFarm}  style={styles.imageFarm}/>
                <TextBasket style={styles.nameFarm}>{nameFarm}</TextBasket>
            </View>

            <TextBasket style={styles.descriptionBasket}>
                {description}</TextBasket>
            <TextBasket style={styles.priceBasket}>{price}</TextBasket>
            
            <TouchableOpacity style={styles.buttonBuy}>
                <TextBasket style={styles.textButtonBuy}>{buttonBuy}</TextBasket>
            </TouchableOpacity>
            
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
    buttonBuy: {
        marginTop: 16,
        backgroundColor: '#2A9F85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    textButtonBuy: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    }
})

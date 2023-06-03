import React from 'react';
import TextBasket from '../../../components/TextBasket';
import {SafeAreaView , Image, StyleSheet} from 'react-native';

export default function Itens({ title, listItens }) {
    return <>
        <TextBasket style={styles.title}>{title}</TextBasket>
        {listItens.map(({ itemName, image }) => {
            return <SafeAreaView style={styles.listItens} key={itemName}>
                        <Image style={styles.imageVegetable} source={image} />
                        <TextBasket style={styles.itemName}>{itemName}</TextBasket>
                    </SafeAreaView>
          
        })}
    </>
}

const styles = StyleSheet.create({
    title: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
    listItens:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: center,
    },
    imageVegetable: {
        width: 46,
        height: 46,
    },
    itemName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: '#464646'
    },
})
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import TextBasket from './TextBasket';

export default function FuncionalButton({textButton, onPress, style}) {
    return (
    <TouchableOpacity   style={[styles.buttonBuy, style]} onPress={onPress}>
                <TextBasket style={styles.textButtonBuy}> {textButton}</TextBasket>
            </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
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

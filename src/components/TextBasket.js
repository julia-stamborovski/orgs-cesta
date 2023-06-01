import React from 'react';
import { Text , StyleSheet} from 'react-native';

export default function TextBasket({ children, style}){
    let styleOrgs = styles.text;

    if(styleOrgs?.fontWeight === 'bold') {
        styleOrgs =  styles.textBold;
    }
    return (
        <Text style={[style, styles]}>{ children }</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Roboto400',
        fontWeight: 'normal',
    },
    textBold: {
        fontFamily: 'Roboto700',
        fontWeight: 'normal',
    },
 })
import React from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import Topo from './components/Topo';
import Details from './components/Details';
import Itens from './components/Itens';

export default function Basket({topo, details, itens}) {

    return (
    <ScrollView>
        <Topo {...topo}/>

        <View style={styles.Basket}>
            
        <Details {...details}/>
       
        <Itens {...itens} />
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        Basket : {
            paddingVertical: 8, 
            paddingHorizontal: 16,
           
        },
    }
);
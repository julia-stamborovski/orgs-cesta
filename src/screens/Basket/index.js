import React from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import Topo from './components/Topo';
import Details from './components/Details';

export default function Basket() {

    return (
    <SafeAreaView>
        <Topo />

        <View style={styles.Basket}>
            
        <Details />
          
        </View>
    </SafeAreaView>
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
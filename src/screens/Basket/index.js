import React from 'react';
import { StyleSheet, SafeAreaView, View} from 'react-native';
import Topo from './components/Topo';
import Details from './components/Details';


export default function Basket({topo, details}) {

    return (
    <SafeAreaView>
        <Topo {...topo}/>

        <View style={styles.Basket}>
            
        <Details {...details}/>
       
          
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
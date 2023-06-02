import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet , View} from 'react-native';
import Basket from './src/screens/Basket';
import { useFonts ,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import mock from './src/mocks/basket';
export default function App() {

  const [loadFont] = useFonts({
    'Roboto400':Roboto_400Regular,
    'Roboto700': Roboto_700Bold,
})
  if (!loadFont) {
  return <View />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}


import React from 'react';
import { StatusBar, SafeAreaView , View} from 'react-native';
import Basket from './src/screens/Basket';
import { useFonts ,Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import mock from './src/mocks/basket';
import AppLoading from 'expo-app-loading';
export default function App() {

  const [loadFont] = useFonts({
    'Roboto400':Roboto_400Regular,
    'Roboto700': Roboto_700Bold,
})
  if (!loadFont) {
  return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...mock} />
    </SafeAreaView>
  );
}


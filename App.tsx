/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inicio } from './src/pantallas/Inicio';
import { Invitar } from './src/pantallas/Invitar';
import { LeerQr } from './src/pantallas/LeerQr';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
          <Stack.Screen name="Invitar" component={Invitar} options={{ title: 'Invitar con QR' }} />
          <Stack.Screen name="LeerQr" component={LeerQr} options={{ title: 'Escanear QR' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

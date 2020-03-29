import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContatosHome from './src/ContatosHome';
import ContatosDetalhe from './src/ContatosDetalhe';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="ContatosHome" 
        component={ContatosHome} 
        options={{
          title: 'Contatos',
          headerStyle:{
            backgroundColor: '#1a3f96'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            },
            }} 
        />
        <Stack.Screen 
        name="ContatosDetalhe" 
        component={ContatosDetalhe} 
        options={{
          title: 'Detalhes',
          headerStyle:{
            backgroundColor: '#1a3f96'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 30,
            },
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
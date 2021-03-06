import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../components/HomeScreen";
import RepoScreen from '../components/RepoScreen';

const Stack = createStackNavigator();

function Navigate() {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Repo" component={RepoScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    };

export default Navigate;

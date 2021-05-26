import React, {useState, useEffect} from 'react';
import {
  Text, 
  View, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navigate from './src/navigation/Navigate';

 
  const Stack = createStackNavigator();
  const App = () => {
  return (
    <Navigate/>
  );
};


export default App;



  // const [data, setData] = useState({
  //   avatar: '',
  //   name: '',
  //   followers: '',
  //   following: '',
  //   repos: '',
  //   type: '',
  //   email: ''
  // });

  // useEffect(() => {
  //  callApi();

  // })

  // const callApi = async () => {
  //   let user = await fetch('https://api.github.com/users');
  //   let userJson = await user.json();

  //   setState({
  //     avatar : userJson.avatar_url
  //   }) 
  //   alert(data.avatar);

  // }
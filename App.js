import React from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import { SwitchNavigator, StackNavigator } from 'react-navigation';

//import Authentication screens
import Loading from './src/auth/Loading/Loading';
import LoginScreen from './src/auth/Login/Login';
import SignUpScreen from './src/auth/Register/SignUp';

//import App screens
import HomeScreen from './src/Home/Home';

const AppStack = StackNavigator({ Home: HomeScreen });
const AuthStack = StackNavigator({ Login: LoginScreen, SignUp: SignUpScreen });

console.disableYellowBox = true;
// create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)

export default App;

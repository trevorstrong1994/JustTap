import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Icon } from 'react-native';
import { SwitchNavigator, StackNavigator, DrawerNavigator, TabNavigator, DrawerItems, TabBarBottom, tabBarOptions, tabBarComponent, tabBarPosition, animationEnabled, swipeEnabled } from 'react-navigation';

//import Authentication screens
import Loading from './src/auth/Loading/Loading';
import LoginScreen from './src/auth/Login/Login';
import SignUpScreen from './src/auth/Register/SignUp';

//import Tab screens
import ExpensesScreen from './src/Dashboard/Expenses/Expenses';
import ReportsScreen from './src/Dashboard/Reports/reports';
//import ScanReceiptScreen from './src/Dashboard'/Receipt/receipt;

//import Drawer Screens
import TagsScreen from './src/Dashboard/Settings/Tags/tags';
import IncomeTaxScreen from './src/Dashboard/Settings/IncomeTax/incomeTax';

//Authentication screens
const AuthStack = StackNavigator({ Login: LoginScreen, SignUp: SignUpScreen  });

//Dashboard screen which includes the tab navigation (Expenses & Reports)
const Dashboard = StackNavigator({
        Tabs: TabNavigator({
            Expenses: {
                screen: ExpensesScreen,
                navigationOptions: {
                    tabBarLabel: 'Expenses'
                },
            },
            Reports: {
                screen: ReportsScreen,
                navigationOptions: {
                    tabBarLabel: 'Reports'
                },
            }
        }, {
             tabBarPosition: 'bottom',
             swipeEnabled: false,
             tabBarOptions: {
                activeTintColor: '#0893CF',
                backgroundColor: '#fff',
                inactiveTintColor: '#A7A9AB',
                //showIcon: true,
                indicatorStyle: {
                    backgroundColor: 'transparent'
                },
                style: {
                    backgroundColor: 'transparent',
                },
             }
        }),
});

// create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    Auth: AuthStack,
    App: Dashboard,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
console.disableYellowBox = true;

export default App;

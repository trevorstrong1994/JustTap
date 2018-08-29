 import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableHighlight } from 'react-native';
import {Icon} from 'native-base';
import { SwitchNavigator, StackNavigator, DrawerNavigator, TabNavigator, createDrawerNavigator, DrawerItems, createStackNavigator } from 'react-navigation';
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

//import Authentication screens
import Loading from './src/auth/Loading/Loading';
import LoginScreen from './src/auth/Login/Login';
import SignUpScreen from './src/auth/Register/SignUp';

//import Tab screens
import ExpensesScreen from './src/Dashboard/Expenses/Expenses';
import ViewReceipt from './src/Dashboard/Expenses/viewReceipt';

import ReportsScreen from './src/Dashboard/Reports/reports';
import TabBar from './src/Dashboard/tabBar';

//import Drawer Screens
import Sidebar from './src/Dashboard/Settings/Sidebar';
import TagsScreen from './src/Dashboard/Settings/Tags/tags';
import IncomeTaxScreen from './src/Dashboard/Settings/IncomeTax/incomeTax';
import ReferFriend from './src/Dashboard/Settings/referFriend/ReferFriend';
import PDFexport from './src/Dashboard/Settings/pdfExport/pdfExport';
import CSVexport from './src/Dashboard/Settings/csvExport/csvExport';

//import receipt manually screens
import AddReceiptScreen from './src/Dashboard/AddReceipt/addReceipt';

//import camera receipt screen
import TakePictureScreen from './src/Dashboard/Receipt/takePicture';
import ScanReceiptScreen from './src/Dashboard/Receipt/receipt';

//Authentication screens
const AuthStack = StackNavigator({ Login: LoginScreen, SignUp: SignUpScreen });

export const Dashboard = DrawerNavigator({
  Stacks: StackNavigator({
    Tabs: TabNavigator({
      Expenses: {
        screen: ExpensesScreen,
      },
      Reports: {
        screen: ReportsScreen
      },
    }, {
       tabBarComponent: TabBar,
       tabBarPosition: 'bottom',
       swipeEnabled: false,
    }),
    ViewReceipt: {
      screen: ViewReceipt
    },
    AddReceiptScreen: {
      screen: AddReceiptScreen
    },
    Camera: {
      screen: TakePictureScreen
    },
    //Sidebar stack
    IncomeTaxScreen: { screen: IncomeTaxScreen },
    TagsScreen: { screen: TagsScreen },
    ReferFriend: { screen: ReferFriend },
    PDFexport: { screen: PDFexport },
    CSVexport: { screen: CSVexport },
  }, {
    transitionConfig: getSlideFromRightTransition
  }),
  }, {
    drawerWidth: 330,
    contentComponent: props => <Sidebar {...props} />,
});

//create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    Auth: AuthStack,
    Main: Dashboard,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
console.disableYellowBox = true;

export default App;

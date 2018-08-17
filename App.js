 import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableHighlight } from 'react-native';
import {Icon} from 'native-base';
import { SwitchNavigator, StackNavigator, DrawerNavigator, TabNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';

//import Authentication screens
import Loading from './src/auth/Loading/Loading';
import LoginScreen from './src/auth/Login/Login';
import SignUpScreen from './src/auth/Register/SignUp';

//import Tab screens
import ExpensesScreen from './src/Dashboard/Expenses/Expenses';
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
const AuthStack = StackNavigator({ Login: LoginScreen, SignUp: SignUpScreen  });

//Dashboard screen which includes the tab navigation (Expenses & Reports)
const Dashboard = DrawerNavigator({
    Stacks: StackNavigator({
        Tabs: TabNavigator({
            Expenses: {
                screen: ExpensesScreen,
            },
            Reports: {
                screen: ReportsScreen,
            },
        }, {
             tabBarComponent: TabBar,
             tabBarPosition: 'bottom',
             swipeEnabled: false,
        }),
    }),
}, {
    drawerWidth: 330,
    contentComponent: props => <Sidebar {...props} />,
});

//Add Expense Screens
const AddReceipt = StackNavigator({ Receipt: AddReceiptScreen });

//Add Camera Screens
const AddReceiptCamera = StackNavigator({ Camera: TakePictureScreen, ScanReceipt: ScanReceiptScreen 
}); 

//Drawer Screens
const SideBarStack = StackNavigator({
    IncomeTaxScreen: { screen: IncomeTaxScreen },
    TagsScreen: { screen: TagsScreen },
    ReferFriend: { screen: ReferFriend },
    PDFexport: { screen: PDFexport },
    CSVexport: { screen: CSVexport }
});

//create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    Auth: AuthStack,
    Main: Dashboard,
    SideBar: SideBarStack,
    ReceiptScreens: AddReceipt,
    UseCamera: AddReceiptCamera,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
console.disableYellowBox = true;

export default App;

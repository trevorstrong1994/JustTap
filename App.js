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
import ScanReceiptScreen from './src/Dashboard/ScanReceipt/scanReceipt';
import CameraButton from './src/Dashboard/cameraButton';

//import Drawer Screens
import Sidebar from './src/Dashboard/Settings/Sidebar';
import TagsScreen from './src/Dashboard/Settings/Tags/tags';
import IncomeTaxScreen from './src/Dashboard/Settings/IncomeTax/incomeTax';
import ReferFriend from './src/Dashboard/Settings/referFriend/ReferFriend';
import PDFexport from './src/Dashboard/Settings/pdfExport/pdfExport';
import CSVexport from './src/Dashboard/Settings/csvExport/csvExport';

//import receipt manually screens
import AddReceiptScreen from './src/Dashboard/AddReceipt/addReceipt';
//import Loader from '../../utils/loader';

//Authentication screens
const AuthStack = StackNavigator({ Login: LoginScreen, SignUp: SignUpScreen  });

//Dashboard screen which includes the tab navigation (Expenses & Reports)
const Dashboard = DrawerNavigator({
    Stacks: StackNavigator({
        Tabs: TabNavigator({
            Expenses: {
                screen: ExpensesScreen,
                navigationOptions: {
                    tabBarLabel: 'Expenses',
                    tabBarIcon: ({ focused }) => (
                        focused
                        ? <Icon name='card' style={{fontSize: 25, color: '#0893CF'}} />
                        : <Icon name='card' style={{fontSize: 25, color: '#A7A9AB'}} />
                    ),
                },
            },
            Reports: {
                screen: ReportsScreen,
                navigationOptions: {
                    tabBarLabel: 'REPORTS',
                    tabBarIcon: ({ focused }) => (
                        focused
                        ? <Icon name='clipboard' style={{fontSize: 25, color: '#0893CF'}} />
                        : <Icon name='clipboard' style={{fontSize: 25, color: '#A7A9AB'}} />
                    ),
                },
            },
        }, {
             //tabBarComponent: CameraButton,
             initialRouteName: 'Expenses',
             tabBarPosition: 'bottom',
             swipeEnabled: false,
             tabBarOptions: {
                activeTintColor: '#0893CF',
                backgroundColor: '#fff',
                inactiveTintColor: '#A7A9AB',
                inactiveBackgroundColor: 'red',
                showIcon: true,
                indicatorStyle: {
                    backgroundColor: 'transparent'
                },
                style: {
                    backgroundColor: '#f1f3f4',
                    borderTopWidth: 1,
                    borderTopColor: '#A7A9AB'
                },
             },
        }),
    }),
}, {
    drawerWidth: 330,
    contentComponent: props => <Sidebar {...props} />,
});

//Add Expense Screens
const AddReceipt = StackNavigator({ Receipt: AddReceiptScreen });

//Drawer Screens
const SideBarStack = StackNavigator({
    IncomeTaxScreen: { screen: IncomeTaxScreen },
    TagsScreen: { screen: TagsScreen },
    ReferFriend: { screen: ReferFriend },
    PDFexport: { screen: PDFexport },
    CSVexport: { screen: CSVexport }
});

// create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    Auth: AuthStack,
    Main: Dashboard,
    SideBar: SideBarStack,
    ReceiptScreens: AddReceipt,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
console.disableYellowBox = true;

export default App;

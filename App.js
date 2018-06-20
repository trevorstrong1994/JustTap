import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native';
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

//import Drawer Screens
import Sidebar from './src/Dashboard/Settings/Sidebar';
import TagsScreen from './src/Dashboard/Settings/Tags/tags';
import IncomeTaxScreen from './src/Dashboard/Settings/IncomeTax/incomeTax';

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
                    tabBarIcon: () => {
                        return <Icon name='card' style={{fontSize: 25, color: '#0893CF'}} />
                    },
                },
            },
            Camera: {
                screen: ScanReceiptScreen,
                    navigationOptions: {
                    tabBarIcon: () => {
                        return <Icon name='camera' style={{fontSize: 30, color: '#ffa500',}} />
                    },
                },
            },
            Reports: {
                screen: ReportsScreen,
                navigationOptions: {
                    tabBarLabel: 'REPORTS',
                    tabBarIcon: () => {
                        return <Icon name='clipboard' style={{fontSize: 25, color: '#0893CF'}} />
                    },
                },
            }
        }, {
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

// create our app's navigation stack
const App = SwitchNavigator (
  {
    AuthLoading: Loading,
    Auth: AuthStack,
    Main: Dashboard,
    ReceiptScreens: AddReceipt,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
console.disableYellowBox = true;

export default App;

import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';
import firebase from 'react-native-firebase';
import { TabBarBottom } from 'react-navigation';
import styles from './styles';

// import components related to this screen
import ImageSlider from './components/image_slider';
import TabBar from './components/tabBar';
import DashboardFooter from './components/footerTabs';

export default class ExpensesScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'DASHBOARD',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            marginLeft: 90
        },
        headerRight: (
            <TouchableOpacity onPress={() =>{navigation.navigate("ReceiptScreens")}}>
                <View style={{ marginRight: 15 }}>
                    <Icon name="add" style={{fontSize: 25, color: '#A7A9AB'}} />
                </View>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <View style={{ marginRight: 15 }}>
                    <Icon name="settings" style={{fontSize: 25, color: '#A7A9AB', marginLeft: 15}} />
                </View>
            </TouchableOpacity>
        ),
    });

    render() {
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', left: 10, right: 0, top: 0 }}>
                    <ImageSlider />
                </View>
                <View style={{ position: 'absolute', top: 330, height: 250 }}>
                    <TabBar />
                </View>
                <View style={{ height: 50, width: '100%', left: 0, right: 0, bottom: 0, position: 'absolute' }}>
                
                </View>
            </View>
        );
    }
}

import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';
import firebase from 'react-native-firebase';
import { TabBarBottom } from 'react-navigation';

import styles from './styles';

// import components related to this screen
import ImageSlider from './components/image_slider';
import TabBar from './components/tabBar';
import DashboardFooter from './components/footerTabs';

export default class ExpensesScreen extends React.Component {
    static navigationOptions = {
        title: 'DASHBOARD',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            marginLeft: 90
        },
        headerRight: (
            <Icon name='add' style={{fontSize: 25, color: '#A7A9AB', marginRight: 15}} />
        ),
        headerLeft: (
            <Icon name="settings"
                style={{fontSize: 25, color: '#A7A9AB', marginLeft: 15}}
                onPress={() => this.props.navigation.navigate("OpenDrawer")}
            />
        ),
    };

    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    handleLogout = () => {
        firebase
            .auth()
            .signOut()
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ position: 'absolute', left: 10, right: 0, top: 0 }}>
                    <ImageSlider />
                </View>
            <View style={{ position: 'absolute', top: 330, height: 250 }}>
                <TabBar />
            </View>
                <View style={{ height: 50, width: '100%', left: 0, right: 0, bottom: 0, position: 'absolute' }}>
                    {/*<Text> {currentUser && currentUser.email} </Text>
                    <Button
                        title="Log Out"
                        onPress={this.handleLogout}
                    />*/}
                </View>
            </View>
        );
    }
}

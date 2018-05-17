import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
import { Icon } from 'native-base';
import firebase from 'react-native-firebase';
import {GoogleSignin} from 'react-native-google-signin';
import styles from './styles';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'DASHBOARD',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            marginLeft: 90
        },
        headerRight: (
            <Icon name='add' style={{fontSize: 25, color: '#0893CF', marginRight: 10}} />
        ),
        headerLeft: (
            <Icon name="settings" style={{fontSize: 25, color: '#0893CF', marginLeft: 10}}/>
        )
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

    googleSignout = () => {
        GoogleSignin.signOut()
            .then(() => {
              console.log('out');
            })
            .catch((err) => {
        });
    }

    render() {
        const { currentUser } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                <Button
                    title="Log Out"
                    onPress={this.handleLogout}
                />
            </View>
        )
    }
}

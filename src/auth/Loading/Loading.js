import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';
import styles from './styles';

/*
 *  using Firebase's 'onAuthStateChanged' listener to get the current auth state of the user
 *  if they are authenticated, we route them to the 'Main' screen.
 *  otherwise, send them to the 'SignUp' screen.
 */

export default class Loading extends React.Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'App' : 'Auth')
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../../assets/splash/splash.jpg')}>
                    {/*<ActivityIndicator size="large" color='#0893cf' style={{bottom: 0, top: 460, left: 0, right: 0}}/>*/}
                </ImageBackground>
            </View>
        )
    }
}
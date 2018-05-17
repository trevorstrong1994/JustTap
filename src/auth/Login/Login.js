import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, H1 } from 'native-base';
import firebase from 'react-native-firebase';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
import styles from './styles';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = { email: '', password: '', errorMessage: ' ', hidePassword: true }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('App'))
          .catch(error => this.setState({ errorMessage: 'Incorrect Email or Password' }))
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    // Calling this function will open Google for login.
    googleLogin = async () => {
      try {
        // Add any configuration settings here:
        await GoogleSignin.configure();

        const data = await GoogleSignin.signIn();

        // create a new firebase credential with the token
        const credential = firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        // login with credential
        const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential);

        console.info(JSON.stringify(currentUser.user.toJSON()));
      } catch (e) {
        console.error(e);
      }
    }

    render() {
        return(
            <View style={styles.container}>
                <ImageBackground
                source={require('../../assets/login-bg/login-bg.png')}
                style={{ width: '100%', height: '100%'}}>
                    <Image
                        style={{width: 300, height: 115, marginLeft: 55, marginTop: 100}}
                        source={require('../../assets/logos/logo2.png')}
                    />
                    {this.state.errorMessage &&
                        <Text style={{ color: 'red', textAlign: 'center', fontSize: 18, top: 60 }}>
                        {this.state.errorMessage}
                    </Text>}
                    <View style={styles.loginSection}>
                        <Item>
                            <Input
                                autoCapitalize="none"
                                placeholder="Email Address"
                                placeholderTextColor="A7A9AB"
                                maxLength={15}
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </Item>
                        <Item>
                            <Input
                                type="password"
                                secureTextEntry={this.state.hidePassword}
                                autoCapitalize="none"
                                placeholder="Password"
                                placeholderTextColor="A7A9AB"
                                maxLength={8}
                                value={this.state.password}
                                onChangeText={password => this.setState({ password })}
                            />
                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                                <Image
                                    source={( this.state.hidePassword) ? require('../../assets/password_icons/hide.png') : require('../../assets/password_icons/view.png')}
                                    style={{resizeBtn: 'contain', height: '100%', width: '100%'}}
                                />
                            </TouchableOpacity>
                        </Item>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        <View style={styles.connectGoogle}>
                            <Text style={{ color: '#a7a9ab', fontSize: 18, textAlign: 'center' }}>OR {'\n'} CONNECT WITH</Text>
                            <GoogleSigninButton
                                style={{width: 50, height: 50, marginTop: 15, marginLeft: 40}}
                                size={GoogleSigninButton.Size.Icon}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={this.googleLogin}
                            />
                        </View>
                      <TouchableOpacity onPress={this.handleLogin}>
                        <Text style={styles.loginButton}>Login</Text>
                      </TouchableOpacity>
                      <View style={styles.noAccountOptionLink}>
                        <Text style={styles.noAccountYet}>Don't have an account yet?</Text>
                        <Text style={styles.signupLink} onPress={() => this.props.navigation.navigate("SignUp")}>Sign Up</Text>
                      </View>
                    </View>
                </ImageBackground>
                </View>
        )
    }
}

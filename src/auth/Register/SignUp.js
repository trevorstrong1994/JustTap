import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground, CheckBox } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, H1, Picker, Left, InputGroup } from 'native-base';
import firebase from 'react-native-firebase';
import styles from './styles';

 /*
  * when the user submits the form, we 'createUserWithEmailAndPassword', and navigate them to the 'Main' screen
  * if there is an error we catch it and display it.
  */

export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null,
    }
    state = { email: '', password: '', errorMessage: null, hidePassword: true, hidePassword2: true }

    handleSignUp = () => {
      const { email, password } = this.state
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('App'))
        .catch(error => this.setState({ errorMessage: 'Sigup Authentication Failed' }))
    }

    managePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }

    confirmPasswordVisibility = () => {
        this.setState({ hidePassword2: !this.state.hidePassword2 });
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
                        <View style={styles.signupSection}>
                            <Item>
                                <Input
                                    value={this.state.email}
                                    placeholder="Email Address"
                                    placeholderTextColor="A7A9AB"
                                    onChangeText={email => this.setState({ email })}
                                />
                            </Item>
                            <Item>
                                <Input
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                    placeholder="Password"
                                    placeholderTextColor="A7A9AB"
                                    type="password"
                                    secureTextEntry={this.state.hidePassword}
                                    autoCapitalize="none"
                                />
                                <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.managePasswordVisibility}>
                                    <Image
                                        source={( this.state.hidePassword) ? require('../../assets/password_icons/hide.png') : require('../../assets/password_icons/view.png')}
                                        style={{resizeBtn: 'contain', height: '100%', width: '100%'}}
                                    />
                                </TouchableOpacity>
                            </Item>
                            <Item>
                                <Input
                                    placeholder="Confirm Password"
                                    placeholderTextColor="A7A9AB"
                                    type="password"
                                    secureTextEntry={true}
                                    autoCapitalize="none"
                                />
                            <TouchableOpacity activeOpacity={0.8} style={styles.visibilityBtn} onPress={this.confirmPasswordVisibility}>
                                <Image
                                    source={( this.state.hidePassword2) ? require('../../assets/password_icons/hide.png') : require('../../assets/password_icons/view.png')}
                                    style={{resizeBtn: 'contain', height: '100%', width: '100%'}}
                                />
                            </TouchableOpacity>
                            </Item>
                            <Item>
                                <Input
                                    placeholder="Profession"
                                    placeholderTextColor="A7A9AB"
                                />
                            </Item>
                              {this.state.errorMessage &&
                                    <Text style={{ color: 'red', textAlign: 'center', marginTop: 20, fontSize: 18 }}>
                                    {this.state.errorMessage}
                              </Text>}
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 10 }}>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                                <Text style={{ fontWeight: '500', fontSize: 18 }}>
                                    I agree to the {''}
                                        <Text
                                            onPress={() => this.props.navigation.navigate("privacyPolicy")}
                                            style={{ textDecorationLine: 'underline', color: '#0893CF' }}>
                                            Terms and Conditions {''}
                                        </Text>
                                    <Text style={{ fontWeight: '500'}}>
                                        and {''}
                                    </Text>
                                    <Text style={{textDecorationLine: 'underline', color: '#0893CF'}}>
                                        Private Policy
                                    </Text>
                                </Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 25 }}>
                                <TouchableOpacity style={{ marginBottom: 10 }} onPress={this.handleSignUp.bind(this)}>
                                    <Text style={styles.signupButton}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.alreadyhaveAccount}>
                                <Text style={styles.haveAccount}>Already have an account?</Text>
                                <Text style={styles.signinLink} onPress={() => this.props.navigation.navigate("Login")}>Log In</Text>
                            </View>
                        </View>
 				</ImageBackground>
            </View>
        )
    }
}
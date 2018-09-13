import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Icon, H1 } from 'native-base';
import firebase from 'react-native-firebase';

class ForgotPassword extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.mainHeading}>Forgot Password</Text>
			</View>
		)
	}
}

export default ForgotPassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		flexDirection: 'column'
	},
	mainHeading: {
		fontSize: 20,
		textAlign:'center'
	}
})
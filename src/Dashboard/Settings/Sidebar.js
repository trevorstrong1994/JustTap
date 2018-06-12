import React, {Component} from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, Platform, View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import {NavigationActions} from 'react-navigation';
import firebase from 'react-native-firebase';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {
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
		return(
			<Container>
				<Content>
                    <View style={styles.imageCover}>
                      <Image
                        style={styles.logo}
                        source={require('../../assets/Profile/profile2x.png')}
                       />
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}> {currentUser && currentUser.email} </Text>
                    </View>
                    <Text style={{fontSize: 18, padding: 5}} onPress={this.props.navigation.navigate('TagsScreen')}>
                        Tags
                    </Text>
                    <Text style={{fontSize: 18, padding: 5}} onPress={this.props.navigation.navigate('IncomeTaxScreen')}>
                        IncomeTax
                    </Text>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  imageCover: {
  	alignSelf: "stretch",
  	height: 135,
  	justifyContent: "center",
  	alignItems: "center",
  	borderBottomWidth: 2,
  	borderColor: '#344E64',
  	backgroundColor:'#0893CF',
  },
  logo: {
  	height: 110,
  	width: 120
  },
  menuList: {
	color: '#344E64'
  }
 });
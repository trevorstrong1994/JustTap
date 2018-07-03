import React, {Component} from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, Platform, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Container, Content, Text, List, ListItem, Body, Right, Left, Switch, Icon } from "native-base";
import {NavigationActions, StackNavigator} from 'react-navigation';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {
    state = { currentUser: null, saveReceipt: false, appendReceipt: false }

    //Pull through current user information (email)
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    //function that handles two different logout authentications (Firebase & Google)
    handleLogout = () => {
        GoogleSignin.revokeAccess()
            .then(() => GoogleSignin.signOut())
            .then(() => {
                this.setState({ user: null })
            })
            .done()

         firebase
            .auth()
            .signOut()
    }

    //function that calls the 'handleLogout' function
    alertLogout = () => {
        Alert.alert(
            'JUSTTAP',
             'Are you sure you want to logout?',
              [
                {text: 'Confirm', onPress: this.handleLogout.bind(this)},
                {text: 'Cancel', onPress:() => console.log('Cancel Pressed'), style: 'cancel'},
              ],
              { cancelable: false }
        )
    }

	render() { 
	    {/* create variable to show the current user logged in */}
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
                    <View style={styles.sidebar}>
                    <Text style={{ color: '#0893CF', fontSize: 18, bottom: 10, left: 10 }}>Receipt and Tax</Text>
                        <ScrollView flexGrow={1}>
                            <List>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("TagsScreen")}>
                                    <Left>
                                        <Icon name="pricetag" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>TAGS</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("IncomeTaxScreen")}>
                                    <Left>
                                        <Icon name="document" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Income Tax</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="download" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Save receipts as photos</Text>
                                    </Body>
                                    <Right>
                                        <Switch
                                            value={this.state.saveReceipt}
                                            onValueChange={(saveReceipt) => this.setState({saveReceipt})}
                                        />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="pin" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Append location to receipts</Text>
                                    </Body>
                                    <Right>
                                        <Switch
                                            value={this.state.appendReceipt}
                                            onValueChange={(appendReceipt) => this.setState({appendReceipt})}
                                        />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("ReferFriend")}>
                                    <Left>
                                        <Icon name="person" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Refer a friend</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("PDFexport")}>
                                    <Left>
                                        <Icon name="image" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>PDF Export</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("CSVexport")}> 
                                    <Left>
                                        <Icon name="images" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>CSV Export</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>

                                {/* OTHER SETTINGS  */}
                                <Text style={{ color: '#0893CF', fontSize: 18, left: 10, marginTop: 10, marginBottom: 10 }}>Other Settings</Text>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="star" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Rate JustTap</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="call" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Support</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="home" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Legal</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="lock" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Change Password</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={this.alertLogout.bind(this)}>
                                    <Left>
                                        <Icon name="log-out" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text style={styles.sidebarText}>Log Out</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            </List>
                         </ScrollView>
                    </View>
				</Content>
				<TouchableOpacity>
                    <View style={styles.footerContainer}>
                        <Image
                            style={{width: 190, height: 70}}
                            source={require('../../assets/logos/logo1.png')}
                        />
                    </View>
                </TouchableOpacity>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
    sidebar: {
        ...Platform.select({
          android: {
            marginTop: StatusBar.currentHeight,
          }
        })
    },
    imageCover: {
        alignSelf: "stretch",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: '#344E64',
        backgroundColor:'#0893CF',
    },
    logo: {
  	    height: 110,
  	    width: 110,
    },
    menuList: {
	    color: '#344E64'
    },
    icon: {
        color: '#0893CF'
    },
    sidebarText: {
        fontSize: 16
    },
    footerContainer: {
        marginLeft: 65
    }
 });
import React, {Component} from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, Platform, View, ScrollView, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem, Body, Right, Left, Switch, Icon } from "native-base";
import {NavigationActions, StackNavigator} from 'react-navigation';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
import PropTypes from 'prop-types';

export default class Sidebar extends Component {
    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

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
                    <View style={styles.sidebar}>
                    <Text style={{ color: '#0893CF', fontSize: 18, bottom: 10, left: 10 }}>Receipt and Tax</Text>
                        <ScrollView flexGrow={1}>
                            <List>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={() => this.props.navigation.navigate("TagsScreen")}>
                                    <Left>
                                        <Icon name="pricetag" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>TAGS</Text>
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
                                        <Text>Income Tax</Text>
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
                                        <Text>Save receipts as photos</Text>
                                    </Body>
                                    <Right>
                                        <Switch value={false} />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="pin" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>Append location to receipts</Text>
                                    </Body>
                                    <Right>
                                        <Switch value={false} />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="person" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>Refer a friend</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="image" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>PDF Export</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }}>
                                    <Left>
                                        <Icon name="images" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>CSV Export</Text>
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
                                        <Text>Rate JustTap</Text>
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
                                        <Text>Support</Text>
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
                                        <Text>Legal</Text>
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
                                        <Text>Change Password</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                                <ListItem icon style={{ marginTop: 5, marginBottom: 5 }} onPress={this.handleLogout.bind(this)}>
                                    <Left>
                                        <Icon name="log-out" style={styles.icon} />
                                    </Left>
                                    <Body>
                                        <Text>Log Out</Text>
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
    footerContainer: {
        marginLeft: 65
    }
 });
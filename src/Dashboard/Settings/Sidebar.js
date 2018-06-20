import React, {Component} from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, Platform, View } from "react-native";
import { Container, Content, Text, List, ListItem, Body, Right, Left, Switch, Icon } from "native-base";
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
                    <View style={styles.sidebar}>
                    <Text style={{ color: '#0893CF', fontSize: 18, bottom: 10, left: 10 }}>Receipt and Tax</Text>
                        <List>
                            <ListItem icon onPress={() => this.props.navigation.navigate('TagsScreen')}>
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
                            <ListItem icon>
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
                            <ListItem icon>
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
                            <ListItem icon>
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
                            <ListItem icon>
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
                            <ListItem icon>
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
                         </List>
                    </View>
				</Content>
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
    }
 });
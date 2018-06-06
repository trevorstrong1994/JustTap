import React, {Component} from "react";
import { AppRegistry, Image, StatusBar, StyleSheet, Platform, View } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = [
"TagsScreen",
"IncomeTaxScreen"];

export default class Sidebar extends Component {
	render() {
		return(
			<Container>
				<Content>
				<View style={styles.imageCover}>
				  <Image
				  	style={styles.logo}
          			source={require('../../assets/Profile/profile2x.png')}
        		   />
	            </View>
				<View style={styles.sidebar}>
				 <List
				 	dataArray={routes}
				 	renderRow={data => {
				 		return (
				 			<ListItem
				 				button
				 				onPress={() => this.props.navigation.navigate(data)}>
				 				<Text style={styles.menuList}>{data}</Text>
				 			</ListItem>
				 		);
				 	}}
				 />
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
  	height: 120,
  	justifyContent: "center",
  	alignItems: "center",
  	borderBottomWidth: 2,
  	borderColor: '#344E64',
  	backgroundColor:'#EDEDED'
  },
  logo: {
  	height: 110,
  	width: 100
  },
  menuList: {
	color: '#344E64'
  }
 });
import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class CSVexport extends Component {
static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'CSV EXPORT',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            marginLeft: -25
        },
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={{marginLeft: 15}}>
                  <Icon name="close" style={{fontSize: 25, color: '#A7A9AB'}} />
                </View>
            </TouchableOpacity>
        ),
    });

	render() {
		return (
			<View style={{ flex: 1 }}>
				<ImageBackground
					source={require('../../../assets/referFriend/Refer-friend2x.png')}
                	style={{ width: '100%', height: '100%'}}>
                </ImageBackground>	
			</View>
		)
	}
}

export default CSVexport;
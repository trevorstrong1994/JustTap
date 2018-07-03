import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class PDFexport extends Component {
static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'PDF EXPORT',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            marginLeft: -20
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
			<ScrollView>
				<View style={{ flex: 1 }}>
					<ImageBackground
						source={require('../../../assets/csb-bg/csb-bg3x.png')}
	                	style={{ width: '100%', height: '60%'}}>
	                </ImageBackground>	
				</View>
			</ScrollView>
		)
	}
}

export default PDFexport;
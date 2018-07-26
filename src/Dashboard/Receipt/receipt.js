import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class ScanReceiptScreen extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'COMPLETE RECEIPT',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            width: '90%'
        },
    });
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text> Receipt Screen</Text>
            </View>
        )
    }
}

export default ScanReceiptScreen;
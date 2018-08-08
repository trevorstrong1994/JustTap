import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, Dimensions } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class ScanReceiptScreen extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'COMPLETE RECEIPT',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            width: '70%'
        },
    });
    render(props) {
        const receipt = this.props.navigation.state.params.path;
        return (
            <View style={{ flex: 1, alignItems: 'center'}}>
                <Image
                    source={{uri: receipt}}
                    style={styles.preview}
                />
            </View>
        )
    }
}

export default ScanReceiptScreen;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
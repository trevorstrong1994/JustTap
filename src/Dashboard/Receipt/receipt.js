import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, Dimensions, TouchableOpacity } from 'react-native';
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

    render() {
        const receipt = this.props.navigation.state.params.path;
        const receiptData = this.props.navigation.state.params.dataSource;
        //const dataSource = this.state.dataSource;
        return (
            <View>
                <Image
                    source={{uri: receipt}}
                    style={styles.preview}
                />
                <FlatList
                    data={[receiptData]}
                    renderItem={({item}) => this.renderRow(item)}
                />
            </View>
        )
    }

    renderRow(item) {
        return (
          <View>
            <Text style={{ fontSize: 20 }}>Fields</Text>
              <Text>Company {JSON.stringify(item.fields.merchantname.value)}</Text>
              <Text>Bill Amount {JSON.parse(item.fields.totalbillamount.value).toFixed(2)}</Text>
              <Text>Billing Date {JSON.stringify(item.fields.billingdate.value)}</Text>

            <Text style={{ fontSize: 20, fontWeight: '600' }}>Line Items</Text>
            <Text style={{ fontSize: 18 }}>Item 1</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text>{JSON.stringify(item.lineItems[0].quantity)}</Text>
              <Text>{JSON.stringify(item.lineItems[0].productName)}</Text>
              <Text>{JSON.parse(item.lineItems[0].finalPrice).toFixed(2)}</Text>
            </View>
            
            <Text style={{fontSize: 18}}>Item 2</Text>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}> 
              <Text>{JSON.stringify(item.lineItems[1].quantity)}</Text>
              <Text>{JSON.stringify(item.lineItems[1].productName)}</Text>
              <Text>{JSON.parse(item.lineItems[1].finalPrice).toFixed(2)}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.submitButton}>
                </View>
                  <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center'}}>Save Expense</Text>
              </TouchableOpacity>
          </View>
        );
    }
}

export default ScanReceiptScreen;

const styles = StyleSheet.create({
  preview: {
    height: 300,
    width: 300,
    alignSelf: 'center'
  },
  submitButton: {
    flex: 0, 
    alignSelf: 'center', 
    marginTop: 30, 
    backgroundColor: '#0893CF',
    width: 150
  }
});
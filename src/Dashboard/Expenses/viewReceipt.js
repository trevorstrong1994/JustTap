import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';
import firebase from 'react-native-firebase';
import { List, ListItem } from 'react-native-elements';
import styles from './styles';

var db = firebase.firestore();

class ViewReceipt extends React.Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'FULL RECEIPT',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            width: '80%'
        },
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Expenses")}}>
                <View style={{marginLeft: 15}}>
                    <Icon name="arrow-back"
                        style={{fontSize: 25, color: '#A7A9AB'}}
                    />
                </View>
            </TouchableOpacity>
        ),
    });

    deleteExpense = () => {
        var receipt_query = db.collection('receipts');
        receipt_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(docRef) {
                docRef.delete();
            });
        });

        return this.props.navigation.navigate('Expenses');
    }

    //function that calls the 'deleteExpense' function
    alertDeleteExpense = () => {
        Alert.alert(
            'JUSTTAP',
             'Are you sure you want to delete this expense?',
              [
                {text: 'Confirm', onPress: this.deleteExpense.bind(this)},
                {text: 'Cancel', onPress:() => console.log('Cancel Pressed'), style: 'cancel'},
              ],
              { cancelable: false }
        )
    }

    render(item) {
        const { params } = this.props.navigation.state;
        const data = params ? params.data : null;

        //function filterReceipt() {
            var productList = data.receipt.lineItems;
            var productItems = [];
            var quantityItems = [];
            var priceItems = [];
            for (var i = 0; i < productList.length; i++) {

                //var productItems = productList[i].productName;
                //console.log('ITEM -> ' + ' ' + productItems);

                //adds the product items to the new receiptItems array
                productItems.push(productList[i].productName + "\n");
                quantityItems.push(productList[i].quantity + "\n");
                priceItems.push(productList[i].finalPrice.toFixed(2) + "\n");
                //receiptItems.push(productList[i].finalPrice.toFixed(2) + "\n");

                /*var productQuantity = productList[i].quantity;
                console.log('QUANTITY -> ' + ' ' + productQuantity);
                quantityItems.push(productList[i].quantity);*/

                /*var productPrices = data.receipt.lineItems[i].finalPrice;
                console.log('PRICE -> ' + ' ' + productPrices);
                receiptItems.push(productList[i].finalPrice);*/

                console.log(priceItems);
            }

        const companyName = JSON.stringify(data.receipt.fields.merchantname.value);
        const productDate = JSON.stringify(data.receipt.fields.billingdate.value);
        const receiptAmount = JSON.stringify(data.receipt.fields.totalbillamount.value);

        return (
            <View>
                {/******** LIST OF PRODUCTS + QUANTITY ********/}
                <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 20, marginBottom: 5, marginLeft: 5 }}> ITEMS </Text>
                <View style={{flex: 0, flexDirection: 'row', marginTop: 5, marginLeft: 10}}>
                    <Text style={{ fontWeight: '500', marginRight: 35}}>Name</Text>
                    <Text style={{ marginRight: 15, marginLeft: 15, fontWeight: '500' }}>Quantity</Text>
                    <Text style={{ fontWeight: '500'}}>Price</Text>
                </View>
                <View style={{ flex: 0, flexDirection: 'row', marginTop: 5, marginLeft: 10 }}>
                    <Text style={{ marginTop: 5 }}> {productItems}</Text>
                    <Text style={{ marginTop: 5, marginRight: 15, marginLeft: 15 }}> {quantityItems}</Text>
                    <Text style={{ marginTop: 5 }}> {priceItems}</Text>
                </View>  
                <View style={{marginLeft: 5, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 10 }}> TOTAL </Text>
                    <Text> {JSON.parse(companyName)} </Text>
                    <Text> {JSON.parse(productDate)} </Text>
                    <Text> £{JSON.parse(receiptAmount).toFixed(2)} </Text>
                </View>  
                <Image
                    style={styles.preview}
                    source={{uri: data.receipt.imageUrl}}
                />

                <TouchableOpacity onPress={this.alertDeleteExpense.bind(this)}>
                    <View style={styles.deleteBtn}>
                        <Text style={{ fontSize: 16, color: '#FFF', marginTop: 8, textAlign: 'center' }}>DELETE EXPENSE</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ViewReceipt;
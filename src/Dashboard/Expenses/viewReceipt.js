import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';
import firebase from 'react-native-firebase';
import { List, ListItem } from 'react-native-elements';

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
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={{marginLeft: 15}}>
                    <Icon name="arrow-back"
                        style={{fontSize: 25, color: '#A7A9AB'}}
                    />
                </View>
            </TouchableOpacity>
        ),
    });

    deleteExpense = () => {
        var receipt_query = db.collection('receipts').where('receipt_id', '==', db.id);
        receipt_query.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                doc.ref.delete();
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

        //var str = "undefined";
        //var res = str.replace("No Products Listed");

        return (
            <View>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginTop: 40}}>
                    <Text style={{ fontWeight: '500'}}>Quantity</Text>
                    <Text style={{ fontWeight: '500'}}>Product Name</Text>
                    <Text style={{ fontWeight: '500'}}>Price</Text>
                </View>

                {/******** LIST OF PRODUCTS + QUANTITY ********/}
                <View style={styles.receiptContainer}>
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-around', marginTop: 3}}>
                        <Text>
                            {`${data.receipt.lineItems.quantity}`}
                        </Text>
                        <Text>
                            {`${data.receipt.lineItems.productName}`}
                        </Text>
                        <Text>
                            {`${data.receipt.lineItems.finalPrice}`}
                        </Text>
                    </View>
                </View> 

                <TouchableOpacity onPress={this.alertDeleteExpense.bind(this)}>
                    <View style={styles.deleteBtn}>
                        <Text style={{ fontSize: 16, color: '#FFF', marginTop: 8, textAlign: 'center' }}>DELETE EXPENSE</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View>
                        <Text>
                            View Receipt
                        </Text>
                    </View>
                </TouchableOpacity>

                 
                <Image
                    style={styles.preview}
                    source={{uri: data.receipt.imageUrl}}
                />
                
            </View>
        )
    }
}

export default ViewReceipt;

const styles = StyleSheet.create({
    receiptContainer: {
        borderColor: '#FFF',
        borderWidth: 3,
        borderRadius: 4
    },
    company: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: 10
    },
    quantity: {
        fontSize: 16,
    },
    product: {
        fontSize: 16
    },
    price: {
        fontSize: 16,
    },
    amount: {
        fontSize: 20,
        fontWeight: '500'
    },
    date: {
        fontSize: 20,
        fontWeight: '500'
    },
    preview: {
        width: 280,
        height: 280,
        borderColor: '#0893CF',
        borderWidth: 3,
        borderRadius: 4,
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    deleteBtn: {
        width: 150, 
        height: 40, 
        backgroundColor: '#FF4D4D',
        marginTop: 30,
        borderColor: '#FFF',
        borderRadius: 5
    }
});
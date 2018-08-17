import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Icon, Footer, FooterTab, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';   
import { TabBarBottom } from 'react-navigation';
import styles from './styles';

//import components related to this screen
import ImageSlider from './components/image_slider';
//import TabBar from './components/tabBar';
import DashboardFooter from './components/footerTabs';
import ActivityIndicatorLoader from '../../utils/activityIndicator';

class ExpensesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receiptsData: [],
            loading: true
        }
    }
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'DASHBOARD',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            width: '90%'
        },
        headerRight: (
            <TouchableOpacity onPress={() =>{navigation.navigate("ReceiptScreens")}}>
                <View style={{ marginRight: 15 }}>
                    <Icon name="add" style={{fontSize: 25, color: '#A7A9AB'}} />
                </View>
            </TouchableOpacity>
        ),
        headerLeft: (
            <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
                <View style={{ marginRight: 15 }}>
                    <Icon name="settings" style={{fontSize: 25, color: '#A7A9AB', marginLeft: 15}} />
                </View>
            </TouchableOpacity>
        ),
    });

    componentDidMount() {
        this.getReceipts();
    }

    getReceipts = () => {
        firebase.database().ref('receipts').once('value').then(snapshot => {
            console.log('snapshot data ' + snapshot.val());
            var items = [];
            snapshot.forEach((child) => {
                items.push({
                    fields: child.val().fields,
                    lineItems: child.val().lineItems
                });
            });
            this.setState({ receiptsData: items })
            console.log('items data ' + this.state.receiptsData);
        });
    }

    /*render() {
        const { navigation } = this.props;
        const receipt = navigation.getParam.path;
        const receiptData = navigation.getParam.dataSource;
        return (
            <View>
                <Image
                    source={{uri: receipt}}
                    style={styles.preview}
                />
                <FlatList
                    data={this.state.receiptsData}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }*/

    deleteExpense = () => {
        firebase.database().ref('receipts').remove()
    }

    render(item, index) {
        return (
          <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 75, marginBottom: 50 }}>
                <ImageSlider />
            </View>
            <View style={{ flex: 2, height: 325, marginTop: 80 }}>
                <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
                    <Tab heading="ALL" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                    <View>
                        <FlatList
                            data={this.state.receiptsData}
                            deleteItem={() => this.deleteExpense(item)}
                            renderItem={({item}) =>
                            <View style={{ borderWidth: 2, borderColor: '#0893CF' }}>
                                <Text>Company {JSON.stringify(item.fields.merchantname.value)}</Text>
                                <Text>Bill Amount {JSON.parse(item.fields.totalbillamount.value).toFixed(2)}</Text>
                                <Text>Billing Date {JSON.stringify(item.fields.billingdate.value)}</Text>

                                <Text>{JSON.stringify(item.lineItems[0].quantity)}</Text>
                                <Text>{JSON.stringify(item.lineItems[0].productName)}</Text>
                                <Text>{JSON.parse(item.lineItems[0].finalPrice).toFixed(2)}</Text>
                                <Text onPress={this.deleteExpense}>DELETE EXPENSE</Text>
                            </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    </Tab>
                    <Tab heading="RECENT" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
                        </View>
                    </Tab>
                    <Tab heading="PROCESSING" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}} >
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
                    </View>
                    </Tab>
                </Tabs>
            </View>
          </View>
        );
    }
}

export default ExpensesScreen;



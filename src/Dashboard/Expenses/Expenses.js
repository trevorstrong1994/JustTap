import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Icon, Footer, FooterTab, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';   
import { TabBarBottom } from 'react-navigation';
import Modal from "react-native-modal";
import { List, ListItem } from 'react-native-elements';
import styles from './styles';

//import components related to this screen
import ImageSlider from './components/image_slider';
//import TabBar from './components/tabBar';
import DashboardFooter from './components/footerTabs';
import ActivityIndicatorLoader from '../../utils/activityIndicator';

var database = firebase.database();

class ExpensesScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            receiptsData: [],
            mostRecentData: [],
            loading: true,
            isModalVisible: false
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
            <TouchableOpacity onPress={() =>{navigation.navigate("AddReceiptScreen")}}>
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

    //toggle modal visibility when viewing full receipt
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    //will guarantee that there's a component to update
    //before the component mounts
    componentDidMount() {
        this.getAllReceipts();
        this.getMostRecentReceipts();
    }

    //retrieves all json data from the real-time database
    getAllReceipts = () => {
        firebase.database().ref('/receipts/').once('value').then(snapshot => {
            console.log('snapshot data ' + snapshot.val());
            var items = [];
            snapshot.forEach((child) => {
                items.push({
                    fields: child.val().fields,
                    lineItems: child.val().lineItems,
                    imageUrl: child.val().imageUrl,
                    key: snapshot.key
                });
            });
            this.setState({ receiptsData: items });
            console.log('items data ' + this.state.receiptsData);
        });
    }

    //retreives most recent expenses by setting the maximum number of receipts to return
    //from the beginning of the ordered list of results
    getMostRecentReceipts = () => {
        firebase.database().ref('/receipts/').orderByKey().limitToLast(3).once('value').then(snapshot => {
            console.log('snapshot data ' + snapshot.val());
            var latestItems = [];
            snapshot.forEach((child) => {
                latestItems.push({
                    fields: child.val().fields,
                    lineItems: child.val().lineItems,
                    imageUrl: child.val().imageUrl,
                    key: snapshot.key
                });
            });
            this.setState({ mostRecentData: latestItems.reverse()});
            console.log('latestItems data ' + this.state.mostRecentData);
        });
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
                            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
                            <FlatList
                                data={this.state.receiptsData}
                                renderItem={({item:data}) => (
                                <ListItem
                                    title={`${data.fields.merchantname.value} ${data.fields.totalbillamount.value}`}
                                    subtitle={data.fields.billingdate.value}
                                    key={data.key}
                                    onPress={() => this.props.navigation.navigate("ViewReceipt", {data})}
                                />
                                )}
                                keyExtractor={item => item.key}
                            />
                            </List>
                        </View>
                        </Tab>
                        <Tab heading="RECENT" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                            <View>
                                <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
                                <FlatList
                                    data={this.state.mostRecentData}
                                    renderItem={({item:data}) => (
                                    <ListItem
                                        title={`${data.fields.merchantname.value} ${data.fields.totalbillamount.value}`}
                                        subtitle={data.fields.billingdate.value}
                                        key={data.key}
                                        onPress={() => this.props.navigation.navigate("ViewReceipt", {data})}
                                    />
                                    )}
                                    keyExtractor={item => item.key}
                                />
                                </List>
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



import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity, TouchableNativeFeedback, FlatList } from 'react-native';
import { Icon, Footer, FooterTab, Tab, Tabs } from 'native-base';
import firebase from 'react-native-firebase';   
import { TabBarBottom } from 'react-navigation';
import styles from './styles';

//import components related to this screen
import ImageSlider from './components/image_slider';
//import TabBar from './components/tabBar';
import DashboardFooter from './components/footerTabs';

class ExpensesScreen extends Component {
    constructor(props) {
        super(props);

        this.renderRow = this.renderRow.bind(this);
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

    render() {
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
                    data={[receiptData]}
                    renderItem={({item}) => this.renderRow(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    renderRow(item) {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', marginTop: 15, marginBottom: 50 }}>
                        <ImageSlider />
                    </View>
                    <View style={{ flex: 2, height: 325 }}>
                        <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
                            <Tab heading="ALL" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                            <View>        
                                <Text style={{ fontSize: 20 }}>Fields</Text>
                                  <Text>Company {JSON.stringify(item)}</Text>
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
            </ScrollView>
        );
    }
}

export default ExpensesScreen;



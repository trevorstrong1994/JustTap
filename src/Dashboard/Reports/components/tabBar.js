import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Tab, Tabs } from 'native-base';

const TabBar = () => {
    return(
        <ScrollView>
            <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
                <Tab heading="TAX CATEGORIES" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                    <View style={{ flex: 1, top: 10, marginLeft: 15, width: 380 }}>
                       <View style={{ flexDirection: 'column', margin: 5 }}>
                           <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 18, marginBottom: 5 }}>Bank, Credit card and other financial chargers</Text>
                           <Text style={{ color: '#A7A9AB', fontSize: 18}}>£0.00</Text>
                       </View>
                       <View style={{ borderColor: '#A7A9AB', borderBottomWidth: 1, width: '100%', marginTop: 10 }}></View>
                       <View style={{ flexDirection: 'column', margin: 5 }}>
                           <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 18, marginBottom: 5, marginTop: 5 }}>Car, food and travel expenses</Text>
                           <Text style={{ color: '#A7A9AB', fontSize: 18}}>£0.00</Text>
                       </View>
                       <View style={{ borderColor: '#A7A9AB', borderBottomWidth: 1, width: '100%', marginTop: 10}}></View>
                       <View style={{ flexDirection: 'column', margin: 5 }}>
                           <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 18, marginBottom: 5, marginTop: 5 }}>Costs of goods bought for resale or goods used</Text>
                           <Text style={{ color: '#A7A9AB', fontSize: 18}}>£0.00</Text>
                       </View>
                       <View style={{ borderColor: '#A7A9AB', borderBottomWidth: 1, width: '100%', marginTop: 10}}></View>
                       <View style={{ flexDirection: 'column', margin: 5 }}>
                           <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 18, marginBottom: 5, marginTop: 5 }}>Costs of goods bought for resale or goods used</Text>
                           <Text style={{ color: '#A7A9AB', fontSize: 18}}>£0.00</Text>
                       </View>
                    </View>
                </Tab>
                <Tab heading="TAGS" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: -40 }}>
                        <Text style={{ color: '#A7A9AB', fontSize: 18 }}>You have not added any tags yet</Text>
                    </View>
                </Tab>
            </Tabs>
        </ScrollView>
    );
}

export default TabBar;
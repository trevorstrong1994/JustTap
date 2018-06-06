import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity } from 'react-native';
import { Tab, Tabs } from 'native-base';

const TabBar = () => {
    return(
        <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
            <Tab heading="ALL" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 40 }}>
                    <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
                </View>
            </Tab>
            <Tab heading="RECENT" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 40 }}>
                    <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
                </View>
            </Tab>
            <Tab heading="PROCESSING" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}} >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , top: 40 }}>
                <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
            </View>
            </Tab>
        </Tabs>
    );
}

export default TabBar;
import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Tab, Tabs, List, ListItem } from 'native-base';

const TabBar = () => {
    return(
            <ScrollView flexGrow={1}>
                <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
                    <Tab heading="TAX CATEGORIES" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                    <List>
                        <ListItem>
                            <View style={{ flexDirection: 'column', margin: 5 }}>
                                <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 16 }}>Bank, Credit card and other financial charges</Text>
                                <Text style={{ color: '#A7A9AB', fontSize: 16 }}>£0.00</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={{ flexDirection: 'column'}}>
                                <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 16 }}>Car, food and travel expenses</Text>
                                <Text style={{ color: '#A7A9AB', fontSize: 16 }}>£0.00</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={{ flexDirection: 'column'}}>
                                <Text style={{ color: '#A7A9AB', fontWeight: '600', fontSize: 16 }}>Costs of goods bought for resale or goods used</Text>
                                <Text style={{ color: '#A7A9AB', fontSize: 16 }}>£0.00</Text>
                            </View>
                        </ListItem>
                    </List>
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
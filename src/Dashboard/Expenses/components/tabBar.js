import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity, FlatList } from 'react-native';
import { Tab, Tabs, Icon } from 'native-base';

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receipt: []
        }
    }

    render() {
        //const imagePath = this.props.navigation.state.params.path;
        return(
            <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'orange' }}>
                <Tab heading="ALL" tabStyle={{backgroundColor: '#0893CF'}} activeTabStyle={{backgroundColor: '#0893CF'}} textStyle={{color: '#fff'}}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: '#A7A9AB', fontSize: 18 }}>No records(s) found</Text>
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
        );
    }
}

export default TabBar;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 100,
    width: 150,
    zIndex: 1
  }
});
import React, {Component} from 'react';
import { StyleSheet, Text, View, AppRegistry, Image, TouchableOpacity } from 'react-native';
import { Segment, Button } from 'native-base';
import SegmentControl from 'react-native-segment-controller';

class ExpenseTotal extends Component {
    constructor() {
        super();

        this.state = {
            index: 0, content: ''
        }
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress(index) {
        this.setState({ content: `Segment ${index + 1} selected !!!`, index });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20, width: 350, marginLeft: 20 }}>
                <SegmentControl
                  values={['2017-2018', '2016-2017']}
                  selectedIndex={this.state.index}
                  height={40}
                  onTabPress={this.handlePress}
                  borderRadius={5}
                  tabStyle={styles.tabsContainer}
                  activeTabStyle={styles.activeTab}
                  tabTextStyle={styles.textTab}
                />
               <Text>{this.state.content}</Text>
            </View>
        );
    }
};

export default ExpenseTotal;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    goPrimeBtn: {
        color: '#fff',
       	textAlign: 'center',
       	backgroundColor: 'orange',
       	padding: 10,
       	fontWeight: '500',
       	borderWidth: 1,
       	borderRadius: 6,
       	borderColor: 'orange',
       	width: 160,
       	height: 40
    },
    tab: {
        padding: 30,
        alignSelf: 'center'
    },
    tabsContainer: {
        borderColor: 'orange',
        borderWidth: 1
    },
    activeTab: {
        backgroundColor: 'orange',
    },
    textTab: {
        color: 'orange'
    }
});
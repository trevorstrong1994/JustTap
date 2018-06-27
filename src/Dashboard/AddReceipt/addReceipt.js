import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Modal, TouchableOpacity, BackHandler } from 'react-native';
import { Tab, Tabs, Icon, Form, Item, Input, Label, Content, DatePicker } from 'native-base';
import ReceiptForm from './receiptForm';
import ExpenseImage from './expenseImage';

class AddReceiptScreen extends Component {
    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {}
    }

    componentWillMount() {
	    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

	componentWillUnmount() {
	    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
	}

    handleBackButtonClick() {
        this.props.navigation.navigate('Main');
        return true;
    }

    static navigationOptions = ({ navigation, screenProps }) => ({ 
        title: 'ADD RECEIPT MANUALLY',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            marginLeft: 25
        },
        headerRight: (
            <Icon name='checkmark'
                style={{fontSize: 25, color: '#A7A9AB', marginRight: 15}}
            />
        ),
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={{ marginLeft: 15 }}>
                    <Icon name="close"
                        style={{fontSize: 25, color: '#A7A9AB'}}
                    />
                </View>
            </TouchableOpacity>
        ),
    });

    render() {
        const state = this.state;
        return(
                <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}>
                    <Tab heading="Expense Details" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#ffa500'}} textStyle={{color: '#ffa500'}} activeTextStyle={{color: '#fff'}}>
                        <Content padder>
                        {/* Receipt Form */}
                        <ReceiptForm />

                        {/* Add Items Table */}
                          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Items</Text>
                            <Icon name="add-circle" style={{fontSize: 30, color: '#A7A9AB' }} />
                          </View>
                          <View style={{ borderWidth: 1, borderColor: '#A7A9AB', borderRadius: 2}}>
                              <View style={styles.container}>
                                <Text style={styles.tableHeadings}>Name</Text>
                                <Text style={styles.tableHeadings}>Quantity</Text>
                                <Text style={styles.tableHeadings}>Price</Text>
                              </View>
                              <View style={styles.inputFields}>
                                <Item regular style={{ width: 120, height: 40, borderRadius: 5 }}>
                                    <Input
                                        maxLength={14}
                                    />
                                </Item>
                                <Item regular style={{ width: 70, height: 40, borderRadius: 5 }}>
                                <Input
                                    maxLength={2}
                                    keyboardType="numeric"
                                />
                                </Item>
                                <Item regular style={{ width: 70, height: 40, borderRadius: 5 }}>
                                <Input
                                    maxLength={6}
                                    keyboardType="numeric"
                                />
                                </Item>
                              </View>
                          </View>
                        </Content>
                    </Tab>
                    <Tab heading="Expense Image" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#ffa500'}} textStyle={{color: '#ffa500'}} activeTextStyle={{color: '#fff'}}>
                        <ExpenseImage />
                    </Tab>
                </Tabs>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#0893CF',
        height: 30,
        left: 0,
    },
    tableHeadings: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        right: 10
    },
    inputFields: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 10,
        right: 10
    }
});

export default AddReceiptScreen;
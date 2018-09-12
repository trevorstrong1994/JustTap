import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Modal, TouchableOpacity ,FlatList, RefreshControl, ToastAndroid} from 'react-native';
import { Tab, Tabs, Icon, Form, Item, Input, Label, Content } from 'native-base';
//import ReceiptForm from './receiptForm';
import ExpenseImage from './expenseImage';
import firebase from 'react-native-firebase';
import DatePicker from 'react-native-datepicker';
import { List, ListItem } from 'react-native-elements';
import styles from './styles';

var db = firebase.firestore();

class AddReceiptScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier: '',
            date: '2018-01-01',
            category: '',
            note: '',
            location: '',
            tag: '',
            inputName: '',
            quantityAmount: '',
            priceAmount: '',
            loading: true,
            receiptsData: [],
            refreshing: false,
            isDisabled: true,    
        }
    }
    static navigationOptions = ({ navigation, screenProps }) => {
        const { params = {} } = navigation.state
        return {
            title: 'ADD RECEIPT MANUALLY',
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#A7A9AB',
                marginLeft: 25
            },
            headerRight: (
                <TouchableOpacity disabled={!params.supplier}>
                    <Icon name='checkmark'
                        style={{fontSize: 25, color: '#A7A9AB', marginRight: 15, opacity: 0.5}}
                    />
                </TouchableOpacity>
            ),
            headerLeft: (
                <TouchableOpacity onPress={() =>{navigation.navigate("Expenses")}}>
                    <View style={{ marginLeft: 15 }}>
                        <Icon name="close"
                            style={{fontSize: 25, color: '#A7A9AB'}}
                        />
                    </View>
                </TouchableOpacity>
            ),
        };
    };

    //Upload the information from the text inputs
    addExpense = () => {
        const { inputName, quantityAmount, priceAmount } = this.state;
        if( inputName == '' || quantityAmount == '' || priceAmount == '' ) {
            alert('Please enter all values');
        }
        else {
            db.collection('manualExpenses').add({
                supplier: this.state.supplierName,
                date: this.state.expenseDate,
                category: this.state.categoryType,
                note: this.state.expenseNote,
                location: this.state.expenseLocation,
                tag: this.state.expenseTag,

                name: this.state.inputName,
                quantity: this.state.quantityAmount,
                price: this.state.priceAmount,
            })
            .then(function(docRef) {
              console.log('Document written with ID ', docRef.id);
            })
            .catch(function(error) {
              console.error('Error adding document: ', error);
            });

            //resets input fields once items are sent to the firestore
            this.setState({
                /******* expense information *******/
                supplierName: '',
                date: '',
                categoryType: '',
                expenseNote: '',
                expenseLocation: '',
                expenseTag: '',

                /******* item information *******/
                inputName: '',
                quantityAmount: '',
                priceAmount: '',
                isDisabled: true,
            });

            this._onRefresh();
            
            setTimeout(() => {
                this.retrieveItemData();
            }, 2000);

            this.toastNotification();
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({
                refreshing: false,
            });
        }, 2000);
    }

    toastNotification() {
        //toast notification for when expense has been added
        setTimeout(() => {
            ToastAndroid.showWithGravityAndOffset (
              'Expense Added',
              ToastAndroid.LONG,
              ToastAndroid.BOTTOM,
              25,
              50
            );
        }, 2000);
    }

    /******* update expense information state ********/    
    updateSupplierInput(value) {
        this.setState({ supplierName: value });
    }

    updateCategoryInput(value) {
        this.setState({ categoryType: value });
    }

    updateNoteInput(value) {
        this.setState({ expenseNote: value });
    }

    updateLocationInput(value) {
        this.setState({ expenseLocation: value });
    }

    updateTagInput(value) {
        this.setState({ expenseTag: value });
    }

    /******* update expense item state ********/    
    updateNameInput(value) {
        this.setState({ inputName: value });
    }

    updateQuantityInput(value) {
        this.setState({ quantityAmount: value });
    }
 
    updatePriceInput(value) {
        this.setState({ priceAmount: value });
    }

    /* update the flatlist before the component mounts */
    componentDidMount() {
        this._onRefresh();
        this.retrieveItemData();
    }

    //retrieve name, quantity & price fields from firestore
    retrieveItemData = () => {
        firebase.firestore().collection('manualExpenses').get().then(querySnapshot => {
        var items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                key: doc.id,
                name: doc.data().name,
                quantity: doc.data().quantity,
                price: doc.data().price,
            });
        });
            this.setState({ receiptsData: items });
            console.log('items data ' + this.state.receiptsData);
        });
    }

    deleteExpense = () => {
        db.collection('manualExpenses').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            });
        });
    }

    render() {
        return (
            <Tabs initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'transparent'}}>
                <Tab heading="Expense Details" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#ffa500'}} textStyle={{color: '#ffa500'}} activeTextStyle={{color: '#fff'}}>
                    <Content padder>
                      {/************ Receipt Form ***********/}
                        <Form>
                            <Item floatingLabel>
                                <Icon name="print" style={{fontSize: 30, color: '#0893CF'}} />
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Supplier</Label>
                                <Input style={{ marginLeft: 5 }} maxLength={30} value={this.state.supplierName} onChangeText={(text) => this.updateSupplierInput(text)} />
                            </Item>
                            <Item floatingLabel>
                                <Icon name="calendar" style={{fontSize: 30, color: '#0893CF'}} />
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Date</Label>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.date}
                                    mode="date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    value={this.state.expenseDate}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                            </Item>
                            <Item floatingLabel>
                                <Icon name="document" style={{fontSize: 30, color: '#0893CF'}} />
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Category</Label>
                                <Input style={{ marginLeft: 10 }} maxLength={30} value={this.state.categoryType} onChangeText={(text) => this.updateCategoryInput(text)}/>
                            </Item>
                            <Item floatingLabel>
                                <Icon name="paper" style={{fontSize: 30, color: '#0893CF'}} />
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Note</Label>
                                <Input style={{ marginLeft: 5 }} maxLength={30} value={this.state.expenseNote} onChangeText={(text) => this.updateNoteInput(text)}/>
                            </Item>
                            <Item floatingLabel>
                                <Icon name="pin" style={{fontSize: 30, color: '#0893CF'}}/>
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Location</Label>
                                <Input style={{ marginLeft: 10 }} maxLength={30} value={this.state.expenseLocation} onChangeText={(text) => this.updateLocationInput(text)}/>
                            </Item>
                            <Item floatingLabel>
                                <Icon name="pricetag" style={{fontSize: 30, color: '#0893CF' }}/>
                                <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Tag</Label>
                                <Input style={{ marginLeft: 5 }} value={this.state.expenseTag} onChangeText={(text) => this.updateTagInput(text)}/>
                            </Item>
                        </Form>

                        {/************ Add Items Table ************/}
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 30, marginBottom: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Items</Text>
                                <TouchableOpacity disabled={true}>
                                    <View>
                                        <Icon name="add-circle"
                                            style={{fontSize: 30, color: '#0893CF' }}
                                            onPress={() => this.addExpense()}
                                        />
                                    </View>
                                </TouchableOpacity>
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
                                    maxLength={30}
                                    value={this.state.inputName}
                                    onChangeText={(text) => this.updateNameInput(text)}
                                />
                            </Item>
                            <Item regular style={{ width: 70, height: 40, borderRadius: 5 }}>
                            <Input
                                maxLength={2}
                                keyboardType="numeric"
                                value={this.state.quantityAmount}
                                onChangeText={(text) => this.updateQuantityInput(text)}
                            />
                            </Item>
                            <Item regular style={{ width: 70, height: 40, borderRadius: 5 }}>
                            <Input
                                maxLength={6}
                                keyboardType="numeric"
                                value={this.state.priceAmount}
                                onChangeText={(text) => this.updatePriceInput(text)}
                            />
                            </Item>
                        </View>
                        <View>
                            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, marginTop: 0 }}>
                                <FlatList
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.state.refreshing}
                                            onRefresh={this._onRefresh}
                                        />
                                    }
                                    data={this.state.receiptsData}
                                    extraData={this.state.refresh}
                                    renderItem={({item}) => (
                                        <ListItem style={styles.listview}
                                            title={`${item.name} ${item.quantity} £${item.price}`}
                                            rightIcon={{ name: 'delete'}}
                                            onPressRightIcon={this.deleteExpense()}
                                        />
                                        )}
                                    keyExtractor={item => item.key}
                                />
                                </List>
                        </View>
                    </View>
                </Content>
            </Tab>
            <Tab heading="Expense Image" tabStyle={{backgroundColor: '#fff'}} activeTabStyle={{backgroundColor: '#ffa500'}} textStyle={{color: '#ffa500'}} activeTextStyle={{color: '#fff'}}>
                <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Camera")}>
                        <Image
                            style={{width: 300, height: 320}}
                            source={require('../../assets/addreciept/default3x.png')}
                        />
                    </TouchableOpacity>
                </View>
            </Tab>
        </Tabs>
        );
    }
}

export default AddReceiptScreen;
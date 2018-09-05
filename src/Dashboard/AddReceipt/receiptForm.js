import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { Tab, Tabs, Icon, Form, Item, Input, Label, Content, DatePicker } from 'native-base';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

var database = firebase.firestore();

class ReceiptForm extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <View>
                <Form>
                    <Item floatingLabel>
                        <Icon name="print" style={{fontSize: 30, color: '#0893CF'}} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Supplier</Label>
                        <Input style={{ marginLeft: 5 }} maxLength={10} />
                    </Item>
                    <Item floatingLabel>
                        <Icon name="calendar" style={{fontSize: 30, color: '#0893CF'}} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Date</Label>
                        <Input style={{ marginLeft: 5 }} maxLength={10} />
                    </Item>
                    <Item floatingLabel>
                        <Icon name="document" style={{fontSize: 30, color: '#0893CF'}} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Category</Label>
                        <Input style={{ marginLeft: 10 }} maxLength={10}/>
                    </Item>
                    <Item floatingLabel>
                        <Icon name="paper" style={{fontSize: 30, color: '#0893CF'}} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Note</Label>
                        <Input style={{ marginLeft: 5 }} maxLength={15} />
                    </Item>
                    <Item floatingLabel>
                        <Icon name="pin" style={{fontSize: 30, color: '#0893CF'}} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Location</Label>
                        <Input style={{ marginLeft: 10 }} maxLength={15} />
                    </Item>
                    <Item floatingLabel>
                        <Icon name="pricetag" style={{fontSize: 30, color: '#0893CF' }} />
                        <Label style={{marginLeft: 15, color: '#A7A9AB'}}>Tag</Label>
                        <Input style={{ marginLeft: 5 }} />
                    </Item>
                </Form>
            </View>
        );
    }
}

export default ReceiptForm;
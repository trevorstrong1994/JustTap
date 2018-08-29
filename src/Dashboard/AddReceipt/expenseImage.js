import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Modal, TouchableOpacity } from 'react-native';
import { Icon, Form, Item, Input, Label, Content } from 'native-base';
import PropTypes from 'prop-types';

const ExpenseImage = (props) => {
    return(
        <Content>
            <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Camera")}>
                <Image
                    style={{width: 300, height: 320}}
                    source={require('../../assets/addreciept/default3x.png')}
                />
            </TouchableOpacity>
            </View>
            <View>
            </View>
        </Content>
    );
}

export default ExpenseImage;
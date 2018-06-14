import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, Modal, TouchableHighlight } from 'react-native';
import { Icon, Form, Item, Input, Label, Content } from 'native-base';
import PropTypes from 'prop-types';

const ScanReceiptScreen = () => {
    navigationOptions = ({ navigation, screenProps }) => ({
        tabBarLabel: <View/>
    });
    return(
        <View style={styles.container}>
            <Text>Camera</Text>
        </View>
        {/*
            <View style={{height: 70, width: 70, borderRadius: 70/2, backgroundColor: '#ffa500', borderWidth: 1, borderColor: '#A7A9AB'}}>
                <TouchableOpacity>
                    <Icon name='camera'
                        style={{fontSize: 35, color: '#fff', left: 19, marginTop: 15}}
                    />
                </TouchableOpacity>
            </View>
        */}
    );
}

export default ScanReceiptScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

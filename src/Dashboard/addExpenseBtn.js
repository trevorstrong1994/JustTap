import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";

const AddExpenseIcon = () => {
    return(
        <TouchableOpacity>
            <View>
                <Icon name='add'
                    style={{fontSize: 25, color: '#A7A9AB', marginRight: 15}}
                    onPress={()=>{ navigation.navigate("ReceiptScreens")}}
                />
            </View>
        </TouchableOpacity>
    );
}

export default AddExpenseIcon;
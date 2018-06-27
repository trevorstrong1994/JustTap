import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { TabNavigator, TabBarBottom } from "react-navigation";

const CameraButton = () => {
    return(
        <TouchableOpacity>
            <View style={{height: 70, width: 70, borderRadius: 70/2, backgroundColor: '#ffa500', borderWidth: 1,  borderColor: '#A7A9AB'}}>
            </View>
        </TouchableOpacity>
    )
}

export default CameraButton;
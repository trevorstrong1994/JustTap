import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

const TagsScreen = () => {
   navigationOptions = {
        drawerLabel: 'tags',
    };
    return(
        <View>
            <Text style={{fontSize: 20}}>NO TAGS FOUND</Text>
        </View>
    );
}

export default TagsScreen;
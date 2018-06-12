import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

const TagsScreen = () => {
   navigationOptions = {
        drawerLabel: 'tags',
    };
    return(
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>NO TAGS FOUND</Text>
        </View>
    );
}

export default TagsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
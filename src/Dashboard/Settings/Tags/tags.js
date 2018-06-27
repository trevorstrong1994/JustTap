import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Icon, Button } from "native-base";

class TagsScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'TAGS',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
        },
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={styles.backBtn}>
                    <Icon name="arrow-back"
                        style={{fontSize: 25, color: '#A7A9AB', marginLeft: 15}}
                    />
                </View>
            </TouchableOpacity>
        ),
    });
    render() {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>NO TAGS FOUND</Text>
            </View>
        );
    }
}

export default TagsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backBtn: {

    }
});
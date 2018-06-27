import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Body, Icon, Button } from "native-base";

class TagsScreen extends Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'TAGS',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1
        },
        headerRight: (
            <Icon name='add'
                style={{fontSize: 25, color: '#A7A9AB', marginRight: 15}}
            />
        ),
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={{marginLeft: 15}}>
                    <Icon name="close"
                        style={{fontSize: 25, color: '#A7A9AB'}}
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
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity, BackHandler } from 'react-native';
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

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        this.props.navigation.navigate.popToTop();
        return true;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>NO TAGS FOUND</Text>
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
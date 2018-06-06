import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';
import firebase from 'react-native-firebase';

export default class SettingsScreen extends React.Component {
     static navigationOptions = {
        drawerLabel: 'SETTINGS',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../assets/Profile/profile2x.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),

        render() {
            return(
                <View>
                    <Text>ffsdfs</Text>
                    <Button
                        onPress={() => this.props.navigation.goBack()}
                        title="Go back home"
                      />
                </View>
            );
        }
    }
}

import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class ReferFriend extends Component {
static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'REFER A FRIEND',
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#A7A9AB',
            textAlign: 'center',
            alignSelf: 'center',
            flex: 1,
            marginLeft: -25
        },
        headerLeft: (
            <TouchableOpacity onPress={() =>{navigation.navigate("Main")}}>
                <View style={{marginLeft: 15}}>
                  <Icon name="close" style={{fontSize: 25, color: '#A7A9AB'}} />
                </View>
            </TouchableOpacity>
        ),
    });

    render() {
        return(
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('../../../assets/referFriend/Refer-friend2x.png')}
                    style={{ width: '100%', height: '100%'}}>
                        <View style={styles.container}>
                            <TouchableOpacity>
                                <View style={styles.textInviteBtn}>
                                    <Icon name="text" style={{color: '#fff', marginRight: 20 }} />
                                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>TEXT INVITE</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.buttonMargin}></View>
                            <TouchableOpacity>
                                <View style={styles.emailInviteBtn}>
                                    <Icon name="mail" style={{color: '#fff', marginRight: 20 }} />
                                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>EMAIL INVITE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                </ImageBackground>
            </View>
        )
    }
}

export default ReferFriend;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textInviteBtn: {
 	  backgroundColor: '#DCDCDC',
   	padding: 15,
   	borderWidth: 1,
   	borderRadius: 25,
   	borderColor: '#DCDCDC',
   	width: 300,
   	height: 60,
   	flexDirection: 'row',
   	justifyContent: 'center',
   	alignSelf: 'center' 
  },
  emailInviteBtn: {
    backgroundColor: '#0893CF',
   	padding: 15,
   	borderWidth: 1,
   	borderRadius: 25,
   	borderColor: '#0893CF',
    width: 300,
   	height: 60,
   	flexDirection: 'row',
   	justifyContent: 'center',
   	alignSelf: 'center',
  },
  buttonMargin: {
    marginTop: 20,
    marginBottom: 20
  }
});
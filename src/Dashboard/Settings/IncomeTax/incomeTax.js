import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Icon, Footer, FooterTab } from 'native-base';

class IncomeTaxScreen extends Component {
static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'INCOME TAX',
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
                    <Icon name="close"
                        style={{fontSize: 25, color: '#A7A9AB'}}
                    />
                </View>
            </TouchableOpacity>
        ),
    });

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    render() {
        return(
            <View style={{ flex: 1 }}>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={{width: 230, height: 220}}
                        source={require('../../../assets/incomeTax_icons/incometax3x.png')}
                    />
                    <Text style={styles.taxSaving}>This Month tax saving is</Text>
                    <Text style={styles.taxAmount}>£ 0.00</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', backgroundColor: '#DCDCDC', marginTop: 20 }}>
                    <Text style={styles.taxRate}>£0  X  TAX RATE 20% = </Text>
                    <Text style={styles.taxRateAmount}>£ 0.00</Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 25 }}>
                        We apply a 20% tax rate to each expense {''}
                            <Text>
                                to give you a better idea of how much you {''}
                            </Text>
                            <Text>
                                can save by scanning receipts with {''}
                            </Text>
                            <Text>
                                JustTap
                            </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

export default IncomeTaxScreen;

const styles = StyleSheet.create({
    taxSaving: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 25
    },
    taxAmount: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#0893CF',
        marginTop: 20
    },
    taxRate: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15
    },
    taxRateAmount: {
        color: '#0893CF',
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});
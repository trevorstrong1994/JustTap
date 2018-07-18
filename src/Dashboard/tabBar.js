import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from "react-navigation";
import Modal from 'react-native-modal';

class TabBar extends Component {
	state = {
		isModalVisible: false
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	}

	render() {
    	return(
	        <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'center'}}>
	        	<View style={{flexDirection: 'row', justifyContent: 'center' }}>
	        		<TouchableOpacity>
	        			<Text>Expenses</Text>
	        			<Icon name="card" style={{fontSize: 20, color: '#0893cf'}} />
	        		</TouchableOpacity>
		        	<TouchableOpacity onPress={this.toggleModal}>
				    	<View style={{height: 70, width: 70, borderRadius: 70/2, backgroundColor: '#ffa500', borderWidth: 1,  borderColor: '#A7A9AB'}}>
				        	<Icon name="camera" style={{fontSize: 35, color: '#fff', left: 20, top: 10}} />
				        </View>
		        	</TouchableOpacity>

		        	<Modal 
		        	isVisible={this.state.isModalVisible}
		        	onBackdropPress={() => this.setState({ isVisible: false })}
		        	>
		        		<View style={{flex: 1, flexDirection: 'column', height: 100, width: 100}}>
		        			<Text> One-sided Reciept </Text>
		        			<Text> Two-sided Reciept </Text>
		        			<Text> Multiple Reciepts </Text>
		        		</View>
		        	</Modal>

	        		<TouchableOpacity>
	        			<Text>Reports</Text>
	        			<Icon name="clipboard" style={{fontSize: 20, color: '#0893cf'}} />
	        		</TouchableOpacity>
	        	</View>
	        </View>
    	)
	}
}

export default TabBar;

const styles = StyleSheet.create({

})
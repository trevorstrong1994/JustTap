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
    	return (
	        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', height: 80}}>
	        	<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ }}>
		        			<Text>Expenses</Text>
		        			<Icon name="card" style={{fontSize: 20, color: '#0893cf', alignSelf: 'center'}} />
	        			</View>
	        		</TouchableOpacity>
		        	
		        	<TouchableOpacity onPress={this.toggleModal}>
				    	<View style={styles.cameraBtn}>
				        	<Icon name="camera" style={{fontSize: 35, color: '#fff', left: 20, top: 10}} />
				        </View>
		        	</TouchableOpacity>

		        	<TouchableOpacity onPress={() => this.props.navigation.navigate("Reports")}>
	        			<View style={{ }}>
		        			<Text>Reports</Text>
		        			<Icon name="clipboard" style={{fontSize: 20, color: '#0893cf', alignSelf: 'center'}} />
		        		</View>
	        		</TouchableOpacity>

		        	<Modal
		        	isVisible={this.state.isModalVisible}
		        	onBackdropPress={() => this.setState({ isModalVisible: false })}
		        	>
			        	<View style={styles.modalView}>
			        		<Text onPress={() => this.props.navigation.navigate("UseCamera")} style={styles.recieptTypes}> One-sided Reciept </Text>
			        		<Text style={styles.recieptTypes}> Two-sided Reciept </Text>
			        		<Text style={styles.recieptTypes}> Multiple Reciepts </Text>
		        		</View>
		        	</Modal>			        	
	        	</View>
	        </View>
    	)
	}
}

export default TabBar;

const styles = StyleSheet.create({
	modalView: {
		flex: 0,
		flexShrink: 1,
		alignSelf: 'center',
		width: 160,
		height: 95,
		backgroundColor: '#D3D3D3',
		marginTop: 300
	},
	cameraBtn: {
		height: 70, 
		width: 70, 
		borderRadius: 70/2, 
		backgroundColor: '#ffa500', 
		borderWidth: 1,  
		borderColor: '#A7A9AB'
	},
	recieptTypes: {
		textAlign: 'center',
		fontSize: 18,
		padding: 3
	}
})

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
	        <View style={{flex: 0.1, flexDirection: 'row', justifyContent: 'space-between'}}>
	        	<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
	        		<TouchableOpacity onPress={() => this.props.navigation.navigate("Expenses")}>
	        			<View style={{ justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
		        			<Icon name="card" style={{fontSize: 23, color: '#0893cf', alignSelf: 'center', marginRight: 5}} />
		        			<Text style={{fontSize: 15}}>Expenses</Text>
	        			</View>
	        		</TouchableOpacity>
		        	
		        	<TouchableOpacity onPress={this.toggleModal}>
				    	<View style={styles.cameraBtn}>
				        	<Icon name="camera" style={{fontSize: 35, color: '#fff', left: 20, top: 15}} />
				        </View>
		        	</TouchableOpacity>

		        	<TouchableOpacity onPress={() => this.props.navigation.navigate("Reports")}>
	        			<View style={{ justifyContent: 'center', marginTop: 20, flexDirection: 'row' }}>
	        				<Text style={{fontSize: 15, marginRight: 5}}>Reports</Text>
		        			<Icon name="clipboard" style={{fontSize: 23, color: '#0893cf', alignSelf: 'center'}} />
	        			</View>
	        		</TouchableOpacity>

		        	<Modal
			        	isVisible={this.state.isModalVisible}
			        	onBackdropPress={() => this.setState({ isModalVisible: false })}
		        	>
			        	<View style={styles.modalView}>
			        		<Text onPress={() => this.props.navigation.navigate("Camera")} style={styles.recieptTypes}> One-sided Reciept </Text>
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
		width: 175,
		height: 100,
		backgroundColor: '#D3D3D3',
		marginTop: 400,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#0893cf'
	},
	cameraBtn: {
		height: 70,
		width: 70, 
		borderRadius: 70/2, 
		backgroundColor: '#ffa500', 
		borderWidth: 1,  
		borderColor: '#A7A9AB',
		marginBottom: 30,
		bottom: 0,
		zIndex: 2
	},
	recieptTypes: {
		textAlign: 'center',
		fontSize: 18,
		padding: 3
	}
})

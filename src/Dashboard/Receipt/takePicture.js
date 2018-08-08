

import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, ActionSheet, Tabs, Tab, List, ListItem } from 'native-base'; 
import { TabNavigator, TabBarBottom } from "react-navigation";
import Modal from "react-native-modal";
import { RNCamera } from 'react-native-camera';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import ImgToBase64 from 'react-native-image-base64';
import styles from './styles';

class TakePictureScreen extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
    this.state = {
      selectedIndex: 0, 
      customStyleIndex: 0,
      path: null,
      dataSource: [],
      isModalVisible: false
    };
  }

  handleCustomIndexSelect = (index) => {
    this.setState({
      ...this.state,
      customStyleIndex: index,
    }); 
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
      title: 'Auto Capture Mode',
      headerTintColor: '#fff', 
      headerTitleStyle: {
          marginLeft: 20
      },
      headerStyle: {
        backgroundColor: '#0893CF'
      },
  });
 
  //function that uses the takePictureAsync instance method
  //takes a picure, saves in your app's cache directory and returns a promise
  takePicture = async function() {
    const options = { quality: 0.5, fixOrientation: true, base64: true }
    const data = await this.camera.takePictureAsync(options)
    this.setState({ path: data.uri }); 
    //console.log(data.uri);
    //console.log(data.base64.length);
    //console.log(data.base64);

    var bodyData = JSON.stringify({
        "additionalFields" : ["totalbillamount"],
        "getLines" : true,
        "fileContent" : data.base64.replace(/\n/gi,"")
    });

    console.log(bodyData.length);

    for (var i = 0; i < bodyData.length; i+=1000) {
      //this.wait(1 * i).then(function(){
      var chunk = bodyData.substring(i,i+1000);
      console.log(chunk);
    //});   
    }

    fetch('https://vision.infrrdapis.com/ocr/v2/receipt', {
      method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',  
          apikey: '1a6b1c3f-b368-424a-9643-9d587b60c537',
        },
        body: bodyData,        
      }).then(response => response.json()).then(data => 
        {
          this.getStatus(data);
        }
      );
    } 
    
    getStatus = function(id) {
      var uri = 'https://vision.infrrdapis.com/ocr/v2/receipt/' + id;
      console.log("Requesting : " + uri);
      fetch(uri, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        apikey: '1a6b1c3f-b368-424a-9643-9d587b60c537' 
      }}).then(response => response.json()).then(response =>
        {
          if(response.status === "ACKNOWLEDGED" || response.status === "UPLOADED" || response.status === "OCRED") {
            setTimeout(() => { this.getStatus(id) }, 1000 )
            //this.getStatus(id);
          }
          else {
            if(response.status == "FAILED") {

            }
            else {
              //do stuff with data
              console.log("********************************************");
              console.log(response.data.fields);
              console.log("***** Company *****");
              console.log(response.data.fields.merchantname.value);
              console.log("***** Total bill amount *****");
              console.log(response.data.fields.totalbillamount.value);
              console.log("***** Product Name *****");
              console.log(response.data.lineItems.productName);
              //console.log("state", this.state.results);
              this.setState({
                dataSource: response.data
              });
            }
          }
          console.log(response)
        });
    }

    wait = function(time) {
      return new Promise(function(resolve, reject){
        setTimeout(resolve, time);
      })
    }

  //render camera along with the a segmented control tab
  renderCamera() {
    return ( 
      <View style={{ flex: 1, flexDirection: 'column' }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style={styles.footer}>
              <SegmentedControlTab
            values={['Short', 'Long']}
                    selectedIndex={this.state.customStyleIndex}
                    onTabPress={this.handleCustomIndexSelect} 
                    tabsContainerStyle={{height: 50, backgroundColor: '#0893CF', justifyContent: 'space-around'}} 
                    tabStyle={{backgroundColor: '#0893CF'}}
                    activeTabStyle={{borderColor: 'transparent', backgroundColor: '#0893CF' }}  
                    tabTextStyle={{color: '#fff', fontWeight: 'bold' }}
                    activeTabTextStyle={{color: '#fff'}}
          /> 
          {this.state.customStyleIndex === 0 &&
            <View style={{ flexDirection: 'row' }}> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                  <View style={styles.cancelBtn}>
                    <Text style={{ color: '#fff', fontSize: 18, justifyContent: 'flex-start'}}>Cancel</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.takePicture.bind(this)}>            
                  <View style={styles.captureBtn}>
                    <Icon name='camera'
                        style={{fontSize: 30, color: '#fff', width: 30}}
                    />
                  </View>
              </TouchableOpacity>                
            </View>
          }
          {this.state.customStyleIndex === 1 &&
            <View style={{ flexDirection: 'row' }}> 
              <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                <View style={styles.cancelBtn}>
                    <Text style={{ color: '#fff', fontSize: 18}}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.takePicture.bind(this)}>            
                <View style={styles.captureBtn}>
                  <Icon name='camera'
                      style={{fontSize: 30, color: '#fff' }} 
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("ScanReceipt")}>
                <View style={styles.nextBtn}>
                  <Text style={{ color: '#fff', fontSize: 18}}>Next</Text>
                </View>
              </TouchableOpacity>
          </View>
          }
        </View>
      </View>
    )
  }

  renderRow(item) {
    //var twoPlacedFloat = parseFloat(item.fields.totalbillamount.value).toFixed(2)
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Fields</Text>
          <Text>{JSON.stringify(item.fields.merchantname.value)}</Text>
          <Text>{JSON.parse(item.fields.totalbillamount.value).toFixed(2)}</Text>
          <Text>{JSON.stringify(item.fields.billingdate.value)}</Text>

        <Text style={{ fontSize: 20 }}>Line Items</Text>
          <Text>{JSON.stringify(item.lineItems.productName)}</Text>
          <Text>{JSON.stringify(item.lineItems.quantity)}</Text>
          <Text>{JSON.stringify(item.lineItems.finalPrice)}</Text>
      </View>
    );
  }

 //preview image once it has been captured
 renderImage() {
  const dataSource = this.state.dataSource;
    return ( 
      <View>
        <Image
          source={{uri: this.state.path}}
          style={styles.preview}
        />
        <View style={styles.bottomFooter}>
          <Text
            style={styles.cancel}
            onPress={() => this.setState({ path: null })}
          >Cancel
          </Text>
          <Text
            style={styles.next}
            onPress={() => this.props.navigation.navigate("ScanReceipt", {path: this.state.path} )}
          >Save Expense
          </Text>
          <TouchableOpacity onPress={this.toggleModal}>
            <View>
              <Text style={styles.viewData}>View Data</Text>
            </View>
          </TouchableOpacity> 
          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
          >
          <View style={styles.modalData}>
            <FlatList
              data={[this.state.dataSource]}
              renderItem={({item}) => this.renderRow(item)}
            />
          </View>
        </Modal>  
        </View>
      </View>
    )
  }

  /*renderItem() {
    return <Text>{JSON.stringify(item.data.fields)}</Text>
  }*/

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

export default TakePictureScreen;
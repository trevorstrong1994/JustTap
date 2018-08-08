import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  displayImage: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 300,
    width: 300
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  footer: {
    backgroundColor: '#0893CF'
  },
  bottomFooter: {
    backgroundColor: '#0893CF',
    height: 75,
    flex: 0
  },
  cancel: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
    alignSelf: 'center'
  },
  next: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 20
  },
  viewData: {
    color: 'orange',
    alignSelf: 'center',
    fontSize: 20
  },
  cancelBtn: {
    marginLeft: 20
  },
  captureBtn: {
    marginLeft: 30
  },
  modalData: {
    flex: 1,
    justifyContent: 'center',
    width: 300,
    height: 350,
    alignSelf: 'center',
    backgroundColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#0893cf'
  }
});

export default styles;
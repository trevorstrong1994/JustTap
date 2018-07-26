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
  cancelBtn: {
    marginLeft: 20
  },
  captureBtn: {
    marginLeft: 30
  }
});

export default styles;
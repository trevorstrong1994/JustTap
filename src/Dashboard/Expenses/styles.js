import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        zIndex: 1
    },
    viewReceiptModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
     preview: {
        width: 280,
        height: 280,
        borderColor: '#0893CF',
        borderWidth: 3,
        borderRadius: 4,
        flex: 0,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 50
    },
    deleteBtn: {
        width: 150, 
        height: 40, 
        backgroundColor: '#FF4D4D',
        marginTop: 30,
        borderColor: '#FFF',
        borderRadius: 5,
        flex: 0,
        alignSelf: 'center'
    }
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginSection: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 320,
        marginLeft: 40,
        marginTop: 70
    },
    forgotPassword: {
        color: '#0893CF',
        fontSize: 16,
        marginTop: 15,
        marginLeft: 180
    },
    connectGoogle: {
        marginTop: 50
    },
    loginButton: {
        color: '#fff',
       	textAlign: 'center',
       	backgroundColor: '#0893CF',
       	padding: 10,
       	fontWeight: '500',
       	borderWidth: 1,
       	borderRadius: 6,
       	borderColor: '#0893CF',
       	marginLeft: 0,
       	marginTop: 40,
       	width: 250
    },
    noAccountOptionLink: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 25
    },
    noAccountYet: {
        color: '#A7A9AB',
        fontSize: 16
    },
    signupLink: {
        color: '#0893CF',
        marginLeft: 10,
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    visibilityBtn: {
        position: 'absolute',
        height: 16,
        width: 25,
        right: 0
    }
});

export default styles;
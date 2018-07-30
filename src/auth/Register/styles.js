import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupSection: {
         flex: 1,
         flexDirection: 'column',
         alignItems: 'center',
         alignSelf: 'center',
         width: 320,
         marginTop: 70
    },
    logo: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 300, 
        height: 115, 
        marginTop: 100,
    },
    signupButton: {
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
     alreadyhaveAccount: {
         flex: 1,
         flexDirection: 'row',
         marginTop: 25,
         marginBottom: 10
     },
     haveAccount: {
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
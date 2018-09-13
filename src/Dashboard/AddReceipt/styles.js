import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
	container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#0893CF',
        height: 30,
        left: 0,
    },
    tableHeadings: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '500',
        right: 10
    },
    inputFields: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 15,
        marginBottom: 10,
        right: 10
    },
    disabled: {
        backgroundColor: 'red'
    },
    buttonWrapper: {
        backgroundColor: '#0893CF'
    }
});

export default styles;
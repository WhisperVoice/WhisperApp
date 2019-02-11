import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 400,
        height: 100,
        padding: 20
    },
    text: {
        fontSize: 18,
        color: '#ffffff'
    }
});

const React = require("react-native");

const { StyleSheet } = React;

export default {

    containerView: {
        flex: 1,
    },
    loginScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 80,
        height: 80,
        marginTop: 50,
    },
    loginFormView: {
        flex: 1,
        justifyContent: 'center',
    },
    loginFormTextInput: {
        // height: 43,
        // fontSize: 14,
        // borderRadius: 5,
        // borderWidth: 1,
        // borderColor: '#eaeaea',
        // backgroundColor: '#fafafa',
        // paddingLeft: 10,
        // marginLeft: 15,
        // marginRight: 15,
        // marginTop: 5,
        // marginBottom: 5,
        // alignItems: 'stretch',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 20,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',

    },
    loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    fbLoginButton: {
        height: 45,
        marginTop: 10,
        backgroundColor: 'transparent',
    },
};
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Expo from 'expo';





class LoginScreen extends Component {

    signInWithGoogleAsync = async () => {
        try {
            const result = await google.logInAsync({
                behavior: 'web',
                iosClientId: '320038307665 - vhdh3lovsq9b9com69n155fj2k3m3ji6.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.conatiner}>
                <Button
                    title="Sign in With Google"
                    onPress={() => this.signInWithGoogleAsync()} />
            </View>
        );
    }
}


export default LoginScreen;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
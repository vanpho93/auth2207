import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import signInAPI from '../api/signIn';
import { getToken, saveToken } from '../api/token';
import checkToken from '../api/checkToken';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { message: '' };
        this.onSignIn = this.onSignIn.bind(this);
    }
    static navigationOptions = {
        title: 'Sign In'
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        getToken()
        .then(token => checkToken(token))
        .then(resJSON => saveToken(resJSON.token))
        .then(() => navigate('GoPlay'))
        .catch(f => f);
    }

    onSignIn() {
        const { navigate } = this.props.navigation;
        signInAPI()
        .then((resJSON) => saveToken(resJSON.token))
        .then(() => navigate('GoPlay'))
        .catch(err => this.setState({ message: err.message }))
    }

    render() {
        const { navigate } = this.props.navigation;
        const { message } = this.state;
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <Text>SignIn</Text>
                <TouchableOpacity onPress={this.onSignIn}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CAE3FC'
    }
});

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getToken } from '../api/token';

export class GoPlay extends Component {
    static navigationOptions = {
        title: 'Go Play'
    }

    constructor(props) {
        super(props);
        this.state = { token: '' };
    }

    componentDidMount() {
        getToken()
        .then(token => this.setState({ token }));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>GoPlay</Text>
                <Text>TOKEN: {this.state.token}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBE27F'
    }
});

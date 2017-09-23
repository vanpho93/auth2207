import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SignIn } from './SignIn';
import { GoPlay } from './GoPlay';

import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
    SignIn: { screen: SignIn },
    GoPlay: { screen: GoPlay }
});

export class App extends Component {
    render() {
        return <Stack />;
    }
}
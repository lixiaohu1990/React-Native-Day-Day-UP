'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StyleSheet,
    View,
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});

class Test extends Component {
    render() {
        return (
            <View style={styles.container}>
    <Text>This is a simple application.</Text>
        </View>
    )
    }
}
// module.exports = EmbededReactNativeExample;
AppRegistry.registerComponent('Test', () => Test);
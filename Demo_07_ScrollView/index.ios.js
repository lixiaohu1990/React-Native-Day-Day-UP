/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

class Demo_07_ScrollView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.tip}> ScrollView 测试</Text>
        <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.contentContainer}
        >
          <Text
              style={{color:'#FFF',margin:5,fontSize:16,backgroundColor:"blue"}}>
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
            Shake or press menu button for dev menuShake or press menu button for dev menu
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 200,
    marginTop: 50,
    bottom:30,
  },

  tip: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  contentContainer: {
    margin: 10,
    backgroundColor:"#ff0000"
  }
});

AppRegistry.registerComponent('Demo_07_ScrollView', () => Demo_07_ScrollView);

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
  Switch,
  Picker,
} from 'react-native';

class Demo_07_Switch_Picker extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        trueSwitchIsOn: true,
        falseSwitchIsOn: false,
        language:'',
      };
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop:50}}>
          <Text> Switch 实例</Text>
          <Switch onValueChange = {(value) => this.setState({falseSwitchIsOn: value})}
                  style={{margin: 10}}
                  value = {this.state.falseSwitchIsOn}
          />
          <Switch onValueChange = {(value) => this.setState({trueSwitchIsOn: value})}
                  value = {this.state.trueSwitchIsOn}
                  style={{margin: 10}}
                  disabled={true}
          />

        </View>
        <Picker style={{width: 200}}
                selectedValue = {this.state.language}
                
                onValueChange = {(value) => this.setState({language: value})}>
          <Picker.Item label="java" value="java"/>
          <Picker.Item label="JavaScript" value="JavaScript"/>
          <Picker.Item label="c" value="c"/>
          <Picker.Item label="swift" value="swift"/>
        </Picker>

        <Text>当前选择的是:{this.state.language}</Text>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Demo_07_Switch_Picker', () => Demo_07_Switch_Picker);

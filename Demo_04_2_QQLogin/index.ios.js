/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

class Demo_04_2_QQLogin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image}
               source={require('./img/app_icon.png')}
        />

        <TextInput style={styles.userInput}
                   placeholder='QQ号/手机号/邮箱'
                   numberOfLines = {1}
                   autoFocus= {true}
                   textAligin = 'center'
         >
        </TextInput>

        <View style={{backgroundColor:'#f4f4f4', height:1}}/>

        <TextInput style={styles.userPassword}
                   placeholder='密码'
                   numberOfLines = {1}
                   secureTextEntry={true}
                   keyboardType = 'numeric'


        ></TextInput>

        <View style={styles.viewCommit}>
          <Text style={{color:"#fff"}}>登录</Text>
        </View>

        <View style={styles.viewBottom}>
          <Text style={styles.viewUnlogin}>无法登录?</Text>
          <Text style={styles.viewRegister}>新用户</Text>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding:10,
  },

  image: {
    borderRadius: 35,
    height: 70,
    width: 70,
    marginTop: 100,
    alignSelf: 'center',
  },

  userInput: {
    marginTop:10,
    backgroundColor:'#fff',
    height:40,
    padding: 10,
  },

  userPassword: {
    height: 40,
    backgroundColor:'#fff',
    padding: 10
  },

  viewCommit: {
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#63B8FF',
    height: 35,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBottom: {
    flex: 1,
    flexDirection:'row',
    bottom: 10,
    alignItems:'flex-end',


  },

  viewUnlogin: {
    fontSize: 12,
    color: '#63B8FF',
    marginLeft: 10,
  },

  viewRegister: {
    fontSize: 12,
    color:'#63B8FF',
    marginRight:10,
    alignItems:'flex-end',
    flex:1,
    flexDirection:'row',
    textAlign: 'right',
  }
});

AppRegistry.registerComponent('Demo_04_2_QQLogin', () => Demo_04_2_QQLogin);

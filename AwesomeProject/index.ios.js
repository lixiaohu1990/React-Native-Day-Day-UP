/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// 开启严格模式
 'use strict';
 // 导入react-native模块
import React, { Component } from 'react';
import SearchPage from './SearchPage';
import { 
	AppRegistry, 
	Text,
	StyleSheet, 
	NavigatorIOS,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image
	
} from 'react-native';

// 定义 “Hello World”文本样式
var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container:{
  	flex:1
  }
});

// JavaScript class
class HelloWorld extends Component {
  render() {
    return <Text style={styles.text}>Hello World(Again)</Text>
  }
}
// 构造一个 navigation controller，应用一个样式，并把初始路由设为 Hello World 组件。
// 在 Web 开发中，路由就是一种定义应用导航的一种技术，即定义页面——或者说是路由——与 URL 的对应关系。
class PropertyFinderApp extends Component{
	render(){
		return(
			<NavigatorIOS
				style={styles.container}
				initialRoute={
					{
						title: 'Property Finder',
						component: SearchPage,
					}
				}/>
		);
	}
}

AppRegistry.registerComponent('AwesomeProject', function() { return PropertyFinderApp });
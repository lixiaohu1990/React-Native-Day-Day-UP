/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableWithoutFeedback,
} from 'react-native';

class ViewBorderStyleExample extends Component{
    constructor(props){
      super(props);
      this.state = {
        showBorder: true,
      };
    }

    _handlePress() {
    this.setState({showBorder: !this.state.showBorder});
    };

    render() {
      return (
        <TouchableWithoutFeedback onPress={this._handlePress.bind(this)}>
          <View>

            <View style={[styles.center,
              {
              marginTop: 20,
              height:40,
              borderWidth: 1,
              borderStyle: this.state.showBorder ? 'dashed' : 'dotted',
              margin: 5,
              backgroundColor: this.state.showBorder ? '#FF0067' : '#527FE4',
              }]}>

              <Text style={styles.font}>borderStyle</Text>

            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }

  };

class ZIndexExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      flipped: false,
    };
  }

  render() {
    const indices = this.state.flipped ? [-1, 0, 1, 2] : [2, 1, 0, -1];
    return (
      <TouchableWithoutFeedback onPress={this._handlePress.bind(this)}>
        <View style = {{margin: 10}}>
          <Text style={{paddingBottom: 10}}>Tap to flip sorting order</Text>
          <View style={[
            styles.myzIndex,
            {marginTop: 0, backgroundColor: '#E57373', elevation: indices[0]}
          ]}>
            <Text>ZIndex {indices[0]}</Text>
          </View>
          <View style={[
            styles.myzIndex,
            {marginLeft: 50, backgroundColor: '#FFF176', elevation: indices[1]}
          ]}>
            <Text>ZIndex {indices[1]}</Text>
          </View>
          <View style={[
            styles.myzIndex,
            {marginLeft: 100, backgroundColor: '#81C784', elevation: indices[2]}
          ]}>
            <Text>ZIndex {indices[2]}</Text>
          </View>
          <View style={[
            styles.myzIndex,
            {marginLeft: 150, backgroundColor: '#64B5F6', elevation: indices[3]}
          ]}>
            <Text>ZIndex {indices[3]}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
  
  _handlePress() {
    this.setState({flipped: !this.state.flipped});
  }
};

  

class Day_01_View extends Component {
  render() {
    return (
        <View style={styles.flex}>
      <View style={styles.container}>
        <View style={[styles.item,styles.center]}>

          <Text style={styles.font}>酒店</Text>

        </View>

        <View style={[styles.item,styles.lineLeftRight]}>

          <View style={[styles.center,styles.flex,styles.lineCenter]}>
            <Text style={styles.font}>海外酒店</Text>
          </View>

          <View style={[styles.center,styles.flex]}>
            <Text style={styles.font}>特惠酒店</Text>

          </View>
        </View>



        <View style={styles.item}>

          <View style={[styles.center,styles.flex,styles.lineCenter]}>
            <Text style={styles.font}>团购</Text>
          </View>

          <View style={[styles.center,styles.flex]}>
            <Text style={styles.font}>客栈，公寓</Text>

          </View>




        </View>
      </View>
        <ViewBorderStyleExample/>

        <View style={{borderRadius: 10, borderWidth: 1, width: 20, height: 20, margin: 10,}} />
          
        <View style={{flexDirection: 'row', margin: 10,}}>
          <View
            style={{
              width: 95,
              height: 10,
              marginRight: 10,
              marginBottom: 5,
              overflow: 'hidden',
              borderWidth: 0.5,
            }}>
            <View style={{width: 200, height: 20}}>
              <Text>Overflow hidden</Text>
            </View>
          </View>
          <View style={{width: 95, height: 10, marginBottom: 5, borderWidth: 0.5}}>
            <View style={{width: 200, height: 20}}>
              <Text>Overflow visible</Text>
            </View>
          </View>
        </View>

        <View style = {{margin: 10}}>
          <View style={{opacity: 0}}><Text>Opacity 0</Text></View>
          <View style={{opacity: 0.1}}><Text>Opacity 0.1</Text></View>
          <View style={{opacity: 0.3}}><Text>Opacity 0.3</Text></View>
          <View style={{opacity: 0.5}}><Text>Opacity 0.5</Text></View>
          <View style={{opacity: 0.7}}><Text>Opacity 0.7</Text></View>
          <View style={{opacity: 0.9}}><Text>Opacity 0.9</Text></View>
          <View style={{opacity: 1}}><Text>Opacity 1</Text></View>
        </View>

        <ZIndexExample/>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:5,
    marginRight:5,
    height:84,
    flexDirection:'row',
    borderRadius:5,
    padding:2,
    backgroundColor:'#FF0067',
  },
  item: {
    flex: 1,
    height:80,

  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  flex:{
    flex:1,
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
  lineLeftRight:{
    borderLeftWidth:1/PixelRatio.get(),
    borderRightWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineCenter:{
    borderBottomWidth:1/PixelRatio.get(),
    borderColor:'#fff',
  },
  myzIndex: {
    justifyContent: 'space-around',
    width: 100,
    height: 50,
    marginTop: -10,
  },
});



AppRegistry.registerComponent('Day_01_View', () => Day_01_View);

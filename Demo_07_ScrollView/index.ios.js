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
  Image,
  ActionSheetIOS,
} from 'react-native';

var BUTTON = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancle',
];

const DESTRUCTIVE_INDEX = 3;
const CANCLE_INDEX = 4;
class ActionSheetExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked: 'none',
        };
    }

    render(){

        return(
            <View>
                <Text onPress={this.showActionSheet.bind(this)}
                style={styles.button}>
                clicked button: {this.state.clicked}
                </Text>
            </View>
        );
    }

    showActionSheet(){
        ActionSheetIOS.showActionSheetWithOptions({
            options:BUTTON,
            cancelButtonIndex:CANCLE_INDEX,
            destructiveButtonIndex:DESTRUCTIVE_INDEX,
            tintColor:'red',
        },
        (buttonIndex) => {
            this.setState({clicked: BUTTON[buttonIndex]});
        });
    }
}

// 邮件组件
class Email extends  Component {
    render(){
        return (
            <View style={{margin:30}}>
                <Text> 动手写组件 </Text>
                <View style={{backgroundColor:'yellow', flex:1, padding:10}}>
                    <Text style={[styles.font14, styles.red]}>{this.props.name}</Text>
                    <Text style={styles.font10}>{this.props.url}</Text>
                </View>
            </View>

        );
    }
}

//循环一个文章列表

class Article extends Component {
    render(){
        return (
            <View style={[styles.testContainer, {borderBottomWidth:1,borderColor:'#DCD7CD'}]}>
                <Text style={[styles.font14, styles.red]}>{this.props.title}</Text>
                <Text style={styles.font10}>{this.props.author}</Text>
                <Text style={styles.font10}>{this.props.time}</Text>
            </View>

        );
    }
}


class Demo_07_ScrollView extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var  data = [{
              title: "React-Native入门指南",
              author: "vczero",
              time: "2015-06-28"
          },
              {
                  title: "为什么世界不一样",
                  author: "vczero",
                  time: "2015-06-8"
              },
              {
                  title: "你来，我就告诉你",
                  author: "vczero",
                  time: "2015-04-01"
              }];
        this.state = {
            articles: data,
        };
      }
  render() {
    return (

      <View style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={styles.contentContainer}
        >
            <ActionSheetExample/>

            <Email name="lixiaohu" url="www.lixiaohu.com"/>

            <Text>循环一个组件的演示</Text>
            {this.state.articles.map(article => {
                return (<Article title={article.title} author={article.author} time={article.time} key={article.title}/>)
            })}
            <View style={{height: 50, marginTop: 30,backgroundColor:'red'}}/>

            <View style={[styles.row, styles.height160,styles.bottom_border, {paddingTop:20,marginTop:30}]}>
                <View style={[styles.part_1_left, {paddingLeft:10}]}>
                    <Text style={[styles.font14,styles.green]}>我们约会吧</Text>
                    <Text style={[styles.font10, styles.marTop14]}>恋爱家人好朋友</Text>
                    <Image style={[styles.yue]} source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
                </View>

                <View style={[styles.part_1_right]}>
                    <View style={[styles.row, styles.bottom_border]}>
                        <View style={[{flex: 1, alignItems:'center'}]}>
                            <Text style={[styles.red, styles.font14]}>超低价值</Text>
                            <Text style={[styles.font10, styles.marTop14]}>十元惠生活</Text>
                        </View>
                        <View style={{flex: 1, alignItems:'center'}}>
                            <Image style={{width:55, height:55}} source={{uri : 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}>

                            </Image>
                        </View>
                    </View>
                    <View style={[styles.row,{paddingLeft:10}]}>
                        <View style={{flex:1, borderRightWidth:1, borderColor:'#DCD7CD', paddingTop:5}}>
                            <Text style={[{color:'#F742AB', marginBottom:10}, styles.font14]}>聚餐宴请</Text>
                            <Text style={styles.font10}>朋友家人常聚</Text>
                            <Image style={{width:25, height:25, alignSelf:'center'}} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
                        </View>
                        <View style={{flex:1, paddingLeft:10, paddingTop:5}}>
                            <Text style={[{flex:1,color:'#FF8601'}, styles.font14]}>名店抢购</Text>
                            <Text style={[{flex:1}, styles.font10]}>距离结束</Text>
                            <View style={[{flexDirection:'row', height:20,marginBottom:5, alignItems:'center'}]}>
                                <Text style={[styles.timeCoutDownBG,styles.font10]}>01</Text><Text>:</Text ><Text style={[styles.timeCoutDownBG,styles.font10]}>37</Text><Text>:</Text><Text style={[styles.timeCoutDownBG, styles.font10]}>36</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>

            <View style={{height: 20, backgroundColor:'#DCD7CD'}}/>
            <View style={[styles.height65,  {flexDirection:'row'}]}>
                <View style={{flex:1, alignSelf:'center', paddingLeft:10}}>
                    <Text style={{color:'#FF8601', fontSize:20, fontWeight:'bold'}}>一元吃大餐</Text>
                    <Text style={styles.font10}>新用户专享</Text>
                </View>

                <View style={{flex:1}}>
                    <Image style={{flex:1, alignSelf: 'center', width:150,height:50,}}
                           source={{uri:'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
                </View>


            </View>


            <View style={[styles.row, styles.top_border,{ height:130}]}>
                <View style={{flex:1}}>
                    <View style={[styles.row, styles.bottom_border,styles.right_border,{alignItems:'center', justifyContent:'center', paddingLeft:10}]}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#FF8601', fontSize:15, fontWeight:'bold'}}>撸串狂欢节</Text>
                            <Text style={{fontSize:10, marginTop:5}}>烧烤6.6元起</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:65, height:55,alignSelf:'center'}}
                                   source={{uri:"http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png"}}>
                            </Image>
                        </View>
                    </View>

                    <View style={[styles.row, styles.bottom_border,styles.right_border,{alignItems:'center', justifyContent:'center', paddingLeft:10}]}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#FF8601', fontSize:15, fontWeight:'bold'}}>撸串狂欢节</Text>
                            <Text style={{fontSize:10, marginTop:5}}>烧烤6.6元起</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:65, height:55,alignSelf:'center'}}
                                   source={{uri:"http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png"}}>
                            </Image>
                        </View>
                    </View>


                </View>

                <View style={{flex:1}}>
                    <View style={[styles.row, styles.bottom_border,{alignItems:'center', paddingLeft:10, justifyContent:'center'}]}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#FF8601', fontSize:15, fontWeight:'bold'}}>撸串狂欢节</Text>
                            <Text style={{fontSize:10, marginTop:5}}>烧烤6.6元起</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:65, height:55,alignSelf:'center'}}
                                   source={{uri:"http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png"}}>
                            </Image>
                        </View>
                    </View>

                    <View style={[styles.row, styles.bottom_border,{alignItems:'center', justifyContent:'center', paddingLeft:10}]}>
                        <View style={{flex:1}}>
                            <Text style={{color:'#FF8601', fontSize:15, fontWeight:'bold'}}>撸串狂欢节</Text>
                            <Text style={{fontSize:10, marginTop:5}}>烧烤6.6元起</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Image style={{width:65, height:55,alignSelf:'center'}}
                                   source={{uri:"http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png"}}>
                            </Image>
                        </View>
                    </View>


                </View>
            </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 200,
    marginTop: 50,
    bottom:30,
  },
  contentContainer: {
    margin: 5,
  },

  row:{
    flexDirection: 'row',
      flex:1,
  },
  marTop18:{
      marginTop:18,
  },
  marTop14:{
      marginTop:14,
  },
  marRight14:{
      marginRight:14,
  },
  marginBottom14: {
      marginBottom:14,
  },
  font14:{
      fontSize:14,
  },
  font10:{
      fontSize:12,
  },
  height160:{
      height: 160
  },
    height65:{
        height: 65
    },
  yue:{
      height:80,
      marginRight:14,
  },

  green:{
      color:'#55A44B',
      fontWeight: '900'
  },
  red:{
      color: '#FF3F0D',
      fontWeight: '900'
  },
  marLeft10:{
      marginLeft:10,
  },
  part_1_left:{
      flex: 1,
      borderColor: '#DCD7CD',
      borderRightWidth: 0.5,
      borderBottomWidth: 1,
  },
  part_1_right:{
      flex:2,
      borderColor: '#DCD7CD',
      borderBottomWidth: 1,
  },
    right_border: {
        borderRightWidth:1,
        borderColor:'#DCD7CD'
    },
    bottom_border: {
      borderBottomWidth:1,
        borderColor:'#DCD7CD'
    },
    top_border: {
        borderTopWidth:1,
        borderColor:'#DCD7CD'
    },
  hanbao:{
      height:55,
      width:55
  },
    timeCoutDownBG: {
        borderRadius:2,
        backgroundColor:'black',
        color:'white',
    },
  testContainer:{

                padding:10,
  },

  button: {
      marginBottom: 10,
      fontWeight:'bold',
  },

  

});

AppRegistry.registerComponent('Demo_07_ScrollView', () => Demo_07_ScrollView);

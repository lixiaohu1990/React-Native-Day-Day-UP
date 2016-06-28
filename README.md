# React-Native-Day-Day-UP

### ECMAScript 6 入门
http://es6.ruanyifeng.com

### [CSS 参考手册](http://www.runoob.com/cssref/css3-pr-align-self.html)

### ScrollView
<http://facebook.github.io/react-native/docs/scrollview.html#content>


### Switch & Picker

#### Switch属性方法
* View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)
* disabled bool 如果该值为true,用户就无法点击switch开关控件，默认为false
* onValueChange function 方法，当该组件的状态值发生变化的时候回调方法
* value bool 该开关的值，如果该值为true的时候，开关呈打开状态，默认为false

#### Picker属性方法
* View相关属性样式全部继承(例如:宽和高,背景颜色,边距等相关属性样式)
* onValueChange  function方法,当选择器item被选择的时候进行调用。该方法被调用的时候回传入一下两个参数
* itemValue:该属性值为被选中的item的属性值
* itemPosition:该选择器被选中的item的索引position
* selectedValue: any任何参数值，选择器选中的item所对应的值，该可以是一个字符串或者一个数字
* style pickerStyleType 该传入style样式，设置picker的样式风格
* enabled bool 如果该值为false，picker就无法被点击选中。例如:用户无法进行做出选择
* mode enum (`dialog`,`dropdown`)  选择器模式。在Android平台上面，设置mode可以控制用户点击picker弹出的样式风格:`dialog`: 该值为默认值，进行弹出一个模态dialog(弹出框)，`dropdown`:以picker视图为基础，在该视图下面弹出下拉框
* prompt string  设置picker的提示语(标题),在Android平台上面，模式设置成'dialog',显示弹出框的标题

### Touchable*系列组件
* TouchableHighlight
* TouchableNativeFeedback(仅限安卓)
* TouchableOpacity
* TouchableWithoutFeedback

### ListView
**ListView.DataSource**

<http://reactnative.cn/docs/0.27/listviewdatasource.html#content>

####[ SampleAppMovies](http://reactnative.cn/docs/0.27/sample-application-movies.html#content)
```js
constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this); 
  }
```

componentDidMount是React组件的一个生命周期方法，它会在组件刚加载完成的时候调用一次，以后不会再被调用

``` js
componentDidMount() {
    this.fetchData();
  }
```
在React的工作机制下，setState实际上会触发一次重新渲染的流程，此时render函数被触发，发现this.state.movies不再是null。注意我们在Promise调用链的最后调用了done() —— 这样可以抛出异常而不是简单忽略。

``` js
fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          movies: responseData.movies,
        });
      })
      .done();
  }
```



### 深入浅出 React Native：使用 JavaScript 构建原生应用
<https://zhuanlan.zhihu.com/p/19996445>
#### 开启严格模式，并导入 react-native 组件
``` js
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
```

#### 定义App的入口，并提供根组件
``` js
AppRegistry.registerComponent('AwesomeProject', function() { return PropertyFinderApp });
```
#### 将一个类供其它文件使用
``` js
module.exports = SearchPage;

// 导入组件
var SearchPage = require('./SearchPage');
```

####  `NavigatorIOS`使用方式：
##### 1.构造一个navigation controller，应用样式，并把初始路由设置为`SearchPage`，路由就是一种定义应用导航的一种技术，即定义页面——或者说是路由——与 URL 的对应关系

``` js
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
```
##### 2.从一级页面push到二级页面
``` js
this.props.navigator.push({
	title:'Result',
	component: SearchResult,
	passProps: {listings: response.listings}
});
```


##### 3.二级页面获取传递的数据
``` js
constructor(props) {
		super(props);
		// 通过 ListView.DataSource 将 ListView 的数据引入，
		// 还有一个函数来显示每一行UI
		var dataSource = new ListView.DataSource({

			// 在构建数据源的同时，还需要一个函数用来比较每两行之间是否重复
			rowHasChanged:(r1, r2) => r1.guid !== r2.guid
			});
		this.state = {
			dataSource: dataSource.cloneWithRows(this.props.listings)
		};
	}
```



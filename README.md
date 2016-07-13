# React-Native-Day-Day-UP



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

#### Native 和 Web 融合
<http://www.infoq.com/cn/presentations/the-fusion-of-native-and-web/>

#### [react-native 之布局篇](https://segmentfault.com/a/1190000002658374)
* react 宽度基于pt为单位， 可以通过Dimensions 来获取宽高，PixelRatio 获取密度。
* 基于flex的布局
	* view默认宽度为100%
	* 水平居中用alignItems, 垂直居中用justifyContent
	* 基于flex能够实现现有的网格系统需求，且网格能够各种嵌套无bug
* 图片布局
	* 通过Image.resizeMode来适配图片布局，包括contain, cover, stretch
	* 默认不设置模式等于cover模式
	* contain模式自适应宽高，给出高度值即可
	* cover铺满容器，但是会做截取
	* stretch铺满容器，拉伸
* 定位
	* 定位相对于父元素，父元素不用设置position也行
	* padding 设置在Text元素上的时候会存在bug。所有padding变成了marginBottom
* 文本元素
	*文字必须放在Text元素里边
	* Text元素可以相互嵌套，且存在样式继承关系
	* numberOfLines 需要放在最外层的Text元素上，且虽然截取了文字但是还是会占用空间
	
	
####  原生与JS之间的交互
相关方法         | 用途           |注意事项     | 参数类型 |
--------------------|------------------|-----------------------|------|
`RCT_EXPORT_MODULE()`宏 | 添加一个参数指定模块名字   | 如果不指定默认就是OC类名   |------|
`RCT_REMAP_METHOD()`宏       | 明确声明给JS导出的方法  | 导出到JS的方法名是OC的方法名的第一个部分，返回值必须是void ，要返回结果给Javascript，你必须通过回调或者触发事件来进行  |------|
 `RCT_REMAP_METHOD()`宏       |指定导出给JS的方法名   | 避免在Javascript端的名字冲突  |
Strikethrough       | \~~Much wow\~~   | 避免在Javascript端的名字冲突  |------|
##### [原生模块](http://reactnative.cn/docs/0.27/native-modules-ios.html#content)
**1.指定在Javascript中访问模块的名字`RCT_EXPORT_MODULE()`**

* 需要导入`#import "RCTBridgeModule.h"`,并实现 `<RCTBridgeModule>`协议
* `RCT_EXPORT_MODULE()`宏，可以添加一个参数指定模块名字，如果不指定默认就是OC类名

**2.明确声明给JS导出的方法`RCT_EXPORT_METHOD()`**

* 导出到JS的方法名是OC的方法名的第一个部分
* 可以使用 `RCT_REMAP_METHOD()`宏，指定JS方法名
* 桥接到JS方法返回值类型必须是`void`
* React Native的桥接操作是异步的，所以要返回结果给Javascript，你必须通过回调或者触发事件来进行

``` js
// CalendarManager.h
#import "RCTBridgeModule.h"

@interface CalendarManager : NSObject <RCTBridgeModule>
@end

// CalendarManager.m
@implementation CalendarManager

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
@end

<!--js-->
var CalendarManager = require('react-native').NativeModules.CalendarManager;
CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');
```
## 组件汇总
### [ActionSheetIOS](http://reactnative.cn/docs/0.27/actionsheetios.html#content)
相关方法         | 用途           |注意事项     | 参数类型 |
--------------------|------------------|-----------------------|------|
static showActionSheetWithOptions(options: Object, callback: Function) | 显示一个ActionSheet弹出框   | `options（字符串数组` `cancelButtonIndex(取消按钮索引) ``destructiveButtonIndex (高亮按钮)` `title(标题)``message(标题下方信息)` |------|
`RCT_REMAP_METHOD()`宏       | 明确声明给JS导出的方法  | 导出到JS的方法名是OC的方法名的第一个部分，返回值必须是void ，要返回结果给Javascript，你必须通过回调或者触发事件来进行  |------|
#### 其它资源
* [react native 环境搭建](https://segmentfault.com/a/1190000003775004)

* [对组件的引用（refs）](http://reactnative.cn/post/608)

* [新手理解Navigator的教程](http://bbs.reactnative.cn/topic/20/新手理解navigator的教程)

* [前端开发中的JS调试技巧](http://www.css88.com/archives/6137)

* [React/React Native 的ES5 ES6写法对照表] (http://bbs.reactnative.cn/topic/15/react-react-native-的es5-es6写法对照表)

* [React-Native入门指南](https://github.com/vczero/react-native-lesson)
* [React Native 高质量学习资料汇总](http://www.jianshu.com/p/454f2e6f28e9#rd)
* [React-Native学习指南](http://blogread.cn/it/article/7919?f=hot1&utm_source=tuicool&utm_medium=referral)
* [React Native专题] (http://www.lcode.org/react-native/)
* [React Native的常见问题](http://bbs.reactnative.cn/topic/130/新手提问前先来这里看看-react-native的常见问题)
* [ReactNative打离线包-ios篇](https://segmentfault.com/a/1190000004189538)
* [植入原生应用-使用pod](http://reactnative.cn/docs/0.27/embedded-app-ios.html#content)
* [React Native移植iOS原生项目-手动](http://www.lcode.org/react-native-integrating/)
	* 第一步：进入到*.xcodeproj文件的上级目录（一定要是他的上级目录），运行React Native初始化命令react-native init [Project Name]，然后输入yes
	* 第二步：删除Android相关的文件
		* android
		* index.android.js
		* node_modules/react-native/android
		* node_modules/react-native/ReactAndroid
	* 第三步：新建Libraries的目录，然后从ios目录下的Libraries下的*.xcodeproj文件全部拖过来
	* 第四步：添加React Native shell脚本
		* 选择TARGETS的Build Phases界面-> + ->选择New Run Script Phase添加一个脚本，并命名为Bundle React Native code and images，把ios工程里的脚本引用复制过来，路径为：`export NODE_BINARY=node
./node_modules/react-native/packager/react-native-xcode.sh`
	* 第五步：添加.a文件和添加搜索头文件的地址
		* 删除ios目录，关闭原有工程再重新打开，在工程的Build Phases界面的Link Binary With Libraries,点击最下面的+号，添加Workspace下的.a文件
		* TARGETS->Build Settings->Header Search Paths中添加一条$(SRCROOT)/node_modules/react-native/React,选择recursive
		* 添加JavaScriptCore.framework
		* 如果有需要在`TARGETS->Build Settings-> other linker flags`添加`-lstdc++`
		* [mac上使用g++编译出错“Undefined symbols for architecture x86_64:” 错误解决办法] (http://www.th7.cn/Program/cp/201409/284464.shtml)

* 编辑器推荐
	* <https://atom.io>
	* <https://nuclide.io>
	* <https://marketplace.visualstudio.com/VSCode>
	* <https://www.visualstudio.com>
	
#### Demo
* [React Native 简单教程](http://www.oschina.net/translate/going-native-with-react)
* [深入浅出 React Native：使用 JavaScript 构建原生应用](https://zhuanlan.zhihu.com/p/19996445)
* [React Native开源项目-F8 App环境搭建](http://www.jianshu.com/p/ce3ed0c6c8c3)
* [example-react-native-redux](https://github.com/alinz/example-react-native-redux) | [文章](http://www.jianshu.com/p/09956d82bca6)
* [react-native-redux-demo](https://github.com/ninty90/react-native-redux-demo) | [文章](http://www.jianshu.com/p/2c43860b0532)

#### 布局相关
* [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

* [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

#### 各种语法
* [JSX语法](http://www.css88.com/archives/5632)

*  [ECMAScript 6 入门](http://es6.ruanyifeng.com)

*  [CSS 参考手册](http://www.runoob.com/cssref/css3-pr-align-self.html)

* [《TypeScript 中文入门教程》](http://www.cnblogs.com/tansm/p/TypeScript_Handbook.html)

* [redux](http://cn.redux.js.org//docs/introduction/Motivation.html) | [源码](https://github.com/react-guide/redux-tutorial-cn)
	* [React Native架构之Redux](http://www.jianshu.com/p/09956d82bca6)
	* [在react-native中使用redux](http://www.jianshu.com/p/2c43860b0532)
	* [近期 React-Native With Redux 开发的一点心得](http://www.tuicool.com/articles/mqAFJnR)
	* [用RN( ListView + Navigator ) + Redux来开发一个ToDoList](http://bbs.reactnative.cn/topic/26/用rn-listview-navigator-redux来开发一个todolist)
	* [redux-devtools](https://github.com/gaearon/redux-devtools)

* [react-native-auto-updater](https://github.com/aerofs/react-native-auto-updater)


https://github.com/lexrus?tab=repositories


[深入理解javascript原型和闭包](http://www.cnblogs.com/wangfupeng1988/p/3977924.html)


#### 常见错误

* `implicit declaration of function  c99` 时需要添加`#import "RCTConvert.h"`
* `Fresh react-native ios app not building`<http://stackoverflow.com/questions/36203184/fresh-react-native-ios-app-not-building#>

打包：https://segmentfault.com/a/1190000004189538


#### 项目汇总
* [新闻客户端](https://github.com/tabalt/ReactNativeNews)
* 码农iOS客户端<https://github.com/starzhy/TheOneCoder>
* [Hacker新闻客户端](https://github.com/iSimar/HackerNews-React-Native)
* 美食类APP <https://github.com/ljunb/react-native-iShiWuPai>
* <https://github.com/zhongjie-chen/rn_rank>
* http://www.lcode.org/react-native-source-cnode/


# React-Native-Day-Day-UP

### ECMAScript 6 入门
http://es6.ruanyifeng.com


### ScrollView
http://facebook.github.io/react-native/docs/scrollview.html#content


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


#### SampleAppMovies
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

**ListView.DataSource**

http://reactnative.cn/docs/0.27/listviewdatasource.html#content

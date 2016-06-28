// 开启严格模式
 'use strict';
 // 导入react-native模块
import React, { Component } from 'react';
import { 
	AppRegistry, 
	Text,
	StyleSheet, 
	NavigatorIOS,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicator,
	Image
	
} from 'react-native';
import SearchResult from './searchResult';

var styles = StyleSheet.create({
	decription: {
  	marginBottom: 20,
  	fontSize: 18,
  	textAlign: 'center',
  	color: '#656565'
  },
  container: {
  	padding: 30,
  	marginTop: 65,
  	alignItems: 'center'
  },

flowRight: {
  flexDirection: 'row',
  alignItems: 'center',
  alignSelf: 'stretch'
},
buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
},
// 文本区域和 ’Go’ 按钮在同一行，不需要显式地定义两个组件的宽度，
// 你只需要将它们放在同一个容器中，加上 flexDirection:'row' 样式，
// 再定义好它们的 flex 值。文本区域是 flex:4，按钮则是 flex:1，这说明两者的宽度比是4:1


button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
},
searchInput: {
  height: 36,
  padding: 4,
  marginRight: 5,
  flex: 4,
  fontSize: 18,
  borderWidth: 1,
  borderColor: '#48BBEC',
  borderRadius: 8,
  color: '#48BBEC'
},
image: {
	width: 217,
	height: 138
}

});
// render 很好地展示出 JSX 以及它表示的结构。
// 通过这个样式，你可以轻易地描绘出组件 UI 的结构：一个容器，包含两个 text 标签。

// TouchableHighlight 表示最高等级的视图 (top-level view)
// TouchableHighlight 是React Native的按钮组件

// 组件拥有一个状态变量：searchString ，且初始值被设置为 london

// 第一次调用 render() 函数用于设置视图。当文本变化时， onSearchTextChanged 函数被调用。
// 之后，通过更新组件的状态来反映输入了新的文本,这会触发另一次 render 。 
// onSearchTextChanged() 函数也会被调用，会将改变的字符串打印出来。
// 每当应用程序更新任何 React 组件,将会触发整个UI层的重新绘制,这会调用你所有组件的 render 方法

// 工具函数
function urlForQueryAndPage(key, value, pageNumber){
	var data = {
		country: 'uk',
		pretty: '1',
		encoding: 'json',
		listing_type: 'buy',
		action: 'search_listings',
      	page: pageNumber
	};

	data[key] = value;

	var queryString = Object.keys(data)
	.map(key => key + '=' + encodeURIComponent(data[key]))
	.join('&');
	console.log(queryString);
	return 'http://api.nestoria.co.uk/api?' + queryString;

};


class SearchPage extends Component{
	constructor(props){
		super(props);
		this.state = {
			searchString: 'london',
			isLoading: false,
			message: ''
		};
	}
	onSearchTextChanged(event){
		console.log('onSearchTextChanged');
		this.setState({ searchString: event.nativeEvent.text});
		console.log(this.state.searchString);
	}
// _executeQuery() 之后会进行真实的查询
	_exexuteQuery(query){
		console.log(query);
		this.setState({ isLoading: true});

// fetch 函数，它是 Web API 的一部分。和 XMLHttpRequest 相比，
// 它提供了更加先进的 API。异步响应会返回一个 promise，
// 成功的话会转化 JSON 并且为它提供了一个你将要添加的方法

		fetch(query)
		.then(response => response.json())
		.then(json => this._handleResponse(json.response))
		.catch(error =>
			this.setState({
				isLoading: false,
				message: 'Something bad happened' + error
			}));
	}

// 如果查询成功，这个方法会清除掉正在加载标识并且记录下查询到属性的个数
	_handleResponse(response){
		this.setState({isLoading : false, message: ''});
		if (response.application_response_code.substr(0, 1) === '1') {
			console.log('Properties found:' + response.listings.length);
			this.props.navigator.push({
				title:'Result',
				component: SearchResult,
				passProps: {listings: response.listings}
			});
		} else{
			this.setState({message:'Location not recognized; please try again.'});
		};
	}

	onSearchPressed() {
		var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
		this._exexuteQuery(query);
	}

	onLocationPress() {
		navigator.geolocation.getCurrentPosition(
			location => {
				var search = location.latitude + ',' + location.longitude;
				this.setState({searchString: search});
				var query = urlForQueryAndPage('centre_point', search, 1);
				this._exexuteQuery(query);
			},

			error => {
				this.setState({
					message: 'There was a problem with obtaining your location: ' + error
			});
			}
		);
	}

	render(){
		console.log('SearchPage.render');
		var  spinner = this.state.isLoading ? 
			(<ActivityIndicator  size='large'/>) :
			(<View/>);
		return(
			
			<View style={styles.container}>
				<Text style={styles.decription}>
					search for houses to buy!
				</Text>
				<Text style={styles.decription}>
					search by place-name, postcode or search near your location 
				</Text>
				<View style={styles.flowRight}>
					<TextInput style={styles.searchInput}
					value={this.state.searchString}
					onChange={this.onSearchTextChanged.bind(this)}
					placeholder='Search via name or postcode'/>
					
					<TouchableHighlight style={styles.button}
						underlayColor='#99d94f'
						onPress={this.onSearchPressed.bind(this)}
						>
						<Text style={styles.buttonText}>
						Go 
						</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight style={styles.button}
					underlayColor='#99d9f4'
					onPress={this.onLocationPress.bind(this)}
				>
					<Text style={styles.buttonText}>
					location
					</Text>
				</TouchableHighlight>
				<Image source={require('./Resources/house.png')} style={styles.image}/>

				{spinner}

				<Text style={styles.decription}>{this.state.message}</Text>
			</View>

			);

	}

}



// 这可以 export SearchPage 类，方便在其他文件中使用它
module.exports = SearchPage;






'use strict'

import React, {Component} from 'react';
// 重构赋值语句
import {
	Appregistry,
	StyleSheet,
	Image,
	View,
	TouchableHighlight,
	NavigatorIOS,
	ListView,
	Text,
} from 'react-native';

import PropertyView from './PropertyView';
var styles = StyleSheet.create({
	thumb: {
		width: 80,
		height: 80,
		marginRight: 10
	},

	textContainer:{
		flex:1
	},

	separator: {
		height: 1,
		backgroundColor: '#dddddd'
	},

	price: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#48BBEC'
	},

	title: {
		fontSize: 20,
		color: '#656565'
	},

	rowContainer: {
		flexDirection: 'row',
		padding: 10
	}
});
class SearchResult extends Component{
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
// 通过用户触发的属性来定位
	rowPressed(propertyGuid){
		var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
		
		// this.props.navigator.push({
		// 	title:'Property',
		// 	component: PropertyView,
		// 	passProps: {property: property}
		// });

		this.props.navigator.push({
	    title: "Property",
	    component: PropertyView,
	    passProps: {property: property}
	  });
	}

	renderRow(rowData, sectionID, rowID){

		var price = rowData.price_formatted.split(' ')[0];
 // onPress属性后使用的箭头函数；它用于捕获每一行的 guid
		return (
			<TouchableHighlight 
			onPress={ ()=> this.rowPressed(rowData.guid)}
			underlayColor='#dddddd'>
				<View>
					<View style={styles.rowContainer}>
						<Image style={styles.thumb} source={{uri: rowData.img_url}}/>
						<View style={styles.textContainer}>
							<Text style={styles.price}>{price}</Text>
							<Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
						</View>
					</View>
					<View style={styles.separator}/>
				</View>
				
			</TouchableHighlight>
		);
	}

	render(){
		return(
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow.bind(this)}
			/>
		);
	}
}

module.exports = SearchResult;
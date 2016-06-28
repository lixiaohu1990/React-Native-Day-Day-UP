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
  Image,
  ListView,
} from 'react-native';

var MOCKED_MOVIES_DATA = [{title:'标题', year:'2015',posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}];
var REQUIST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class SampleAppMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
    }
    this.fetchData = this.fetchData.bind(this);
  }
  // 会在组件刚加载完成的时候调用一次，以后不会再被调用
  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch(REQUIST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource:this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true,
          });
        })
        .done();
  }



  // 渲染/rander
  render() {
    if (!this.state.loaded){
      return this.renderLoadingView();
    }

    // var movie = this.state.movies[0];
    // return this.renderMovie(movie);
    // dataSource接口用来在ListView的整个更新过程中判断哪些数据行发生了变化

    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderMovie}
            style={styles.listView}
        ></ListView>
    );
  }

  renderLoadingView(){
    return (
        <View style={styles.container}>
          <Text>
          正在加载电影数据...
          </Text>
        </View>
    );
  }

  renderMovie(movie){
    return (
        <View style={styles.container}>
          <Image source={{uri: movie.posters.thumbnail}}
                 style={styles.thumbnail}
          ></Image>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>

        </View>
    );
  }

}
// flexDirection: 'row'来让我们的主容器的成员从左到右横向布局，而非默认的从上到下纵向布局
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  rightContainer: {
    flex: 1
  },
  
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail:{
    width: 53,
    height: 81
  },

  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center'
  },

  year: {
    textAlign: 'center'
  },

  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('SampleAppMovies', () => SampleAppMovies);

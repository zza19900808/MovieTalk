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
  ListView
} from 'react-native';

  const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
export default class MovieTalk extends Component {
  constructor(props){
      super(props);
      let movies =[];

      let dataSource = new ListView.DataSource({
        rowHasChanged:(row1,row2) => row1 !== row2
      });


      this.state = {
        movies:dataSource.cloneWithRows(movies),
        loaded:false
      };
  
    this.fetchData();
  }

    fetchData(){
      fetch(REQUEST_URL)
      .then(response=>response.json())
      .then(responseData =>{
        this.setState({
          movies:this.state.movies.cloneWithRows(responseData.subjects),
          loaded:true
        })
      }).done();
    }

  renderMovieList(movie){
      return(
        <View style={styles.item}>
          <View style={styles.itemImage}> 
          <Image 
          source={{uri:movie.images.large}}
          style={styles.image}
          ></Image>
          </View>
          <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>影片名 :{movie.title}</Text>
          <Text style={styles.itemMeta}>{movie.original_title}({movie.year}年)</Text>
          <Text style={styles.redText}>评分 : {movie.rating.average}分</Text>
          </View>
        </View>

        );
  }

  render() {

      if(!this.state.loaded){
        return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>正在加载...</Text>
          </View>
        </View>
          );
      }
    
      
    return (

      <View style={styles.container}>
          <ListView
        dataSource={this.state.movies} 
        renderRow={this.renderMovieList}
          />
      </View>
    );
  }
}




let styles = StyleSheet.create({
  loading:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  overlay:{
      backgroundColor:'rgba(0,0,0,0.3)',
      alignItems:'center',
  },
  overlayHeader:{
    fontSize:33,
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
  },
  overlaySubHeader:{
    fontSize:16,
    fontWeight:'200',
    color:'#eae7ff',
    padding:10,
    paddingTop:10

  },

  backgroundImage:{
    flex:1,
    resizeMode :'cover'
  },
  image:{
    width:99,
    height:138,
    margin:6
  },
  container:{
    backgroundColor:'#eae7ff',
    flex:1,
    padding:1
  },
  item:{
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'rgba(100,53,201,0.1)',
    paddingBottom:6,
    marginBottom:6,
    flex:1

  },
  itemContent:{
    flex:1,
    marginLeft:13,
    marginTop:6,
    marginBottom:6,

  },
  itemHeader:{
    fontSize:18,
    fontWeight:'300',

  },
  itemOne:{
  },
  itemTwo:{
  },
  itemThree:{
    flex:2
  },
  itemText:{
    fontSize:33,
    fontWeight:'200',
    color:'#6435c9',
    padding:30
  }

})


AppRegistry.registerComponent('MovieTalk', () => MovieTalk);

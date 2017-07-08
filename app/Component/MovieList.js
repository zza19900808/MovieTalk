 import React, { Component } from 'react';
 import styles from '../Style/mainCss';
 import {
   Text,
   View,
   Image,
  ListView,
  TouchableHighlight
  } from 'react-native';
  const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
 export default class MovieList extends Component {
    constructor(props){
    let movies=[];
      super(props);
     
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
_showDetail(movie){
  alert(movie.title);


}

  renderMovieList(movie,sectionId,rowId,highlightRow){
      return(
        <TouchableHighlight onPress={()=>this._showDetail(movie)}> 
        <View style={styles.item}>
          <View style={styles.itemImage}> 
          <Image 
          source={{uri:movie.images.large}}
          style={styles.image}
          ></Image>
          </View>
          <View style={styles.itemContent}>
          <Text style={styles.itemHeader}>电影名3 : {movie.title}</Text>
          <Text style={styles.itemMeta}>{movie.original_title}({movie.year}年)</Text>
          <Text style={styles.redText}>评分 : {movie.rating.average}分</Text>
          </View>
    
        </View>
       
                </TouchableHighlight>
        
        );
  }
    render() {
    if(!this.state.loaded){
        return(
        <View style={styles.container}>
          <View style={styles.loading}>
            <Text>正在加载...</Text>
            <Text></Text>
          </View>
        </View>
          );
      }
    
      
    return (

      <View style={styles.container}>
          <ListView
        dataSource={this.state.movies} 
        renderRow={this.renderMovieList.bind(this)}
        
          />
      </View>
      
    );
    }
 }



import React, { Component } from 'react';
import MovieList from './app/Component/MovieList';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
 
export default class MovieTalk extends Component {
  
  constructor(props){
    super(props)
  }


  render() {

     
      
    return (

      <MovieList></MovieList>
      
    );
  }
}




AppRegistry.registerComponent('MovieTalk', () => MovieTalk);

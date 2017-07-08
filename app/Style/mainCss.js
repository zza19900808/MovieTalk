import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
    paddingTop:25
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


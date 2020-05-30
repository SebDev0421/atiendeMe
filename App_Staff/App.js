import React, {useState, Component} from 'react';
import {  StyleSheet, 
          Text, 
          View,
          Button
        } from 'react-native';
import InfoLayaout from './screens/infolayaout'
import Scanqr from './screens/scanqr'
import Api from './src/utils/api'

class App extends Component{
  constructor(){
    super()
    this.state={
      Data : []
    }
  }
  async componentDidMount(){
    const URL = 'http://181.54.182.7:5000/api/users'
    const response = await fetch(URL)
    let data = await response.json()
    this.setState({Data : data[0]})
    console.log(data[0])
    console.log(this.state.Data)
  }
  recievedKey(){
    console.log("yes")
  }
render(){
  return (
    <View style={styles.container}>
          <Scanqr recievedKey = {this.recievedKey()}/>
        {/* <InfoLayaout 
          Datos = {this.state.Data}
        />  */} 
          
    </View> 
    )   
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:'15%'
  }
})

export default App 
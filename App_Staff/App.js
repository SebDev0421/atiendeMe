import React, {useState, Component} from 'react';
import {  StyleSheet, 
          Text, 
          View,
          Button
        } from 'react-native';
import InfoLayaout from './screens/infolayaout'
import Scanqr from './screens/scanqr'


class App extends Component{
  constructor(){
    super()
    this.state={
      Data : [],
      Scanned: true,
      Key:''
    }
    this.returnScanned = this.returnScanned.bind(this)
    this.goScanned = this.goScanned.bind(this)
    this.recievedKey = this.recievedKey.bind(this)
  }


  returnScanned(e){
    this.setState({ Scanned: false})
  }
  goScanned(e){
    this.setState({ Scanned: true})
  }

  async componentDidMount(){
    const URL = 'http://181.54.182.7:5000/api/users'
    const response = await fetch(URL)
    let data = await response.json()
    this.setState({Data : data[0]})
    console.log(data[0])
    console.log(this.state.Data)
  }
  
  recievedKey(e){
    console.log(e.target.dataset.key)
  }
render(){
  return (
    <View style={styles.container}>
      {
        this.state.Scanned == true ?
        <Scanqr recievedKey = {this.recievedKey} againScanned={this.returnScanned}/> 
        :
        <InfoLayaout 
            Datos = {this.state.Data}
            againScanned = {this.goScanned} 
          />  
      }       
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
import React, {Component} from 'react';
import {  StyleSheet,  
          View,
          AsyncStorage,
          Button
        } from 'react-native';
import InfoLayaout from './screens/infolayaout'
import Scanqr from './screens/scanqr'
import dataKey from './src/data/data.json'

var Key = dataKey.key
class App extends Component{
  constructor(){
    fetch('http://181.54.182.7:5000/api/temporal/hospital/user', {
        method: 'PUT',
        headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
        },
        body: JSON.stringify({
            _id: Key
        }) 
    })
    .then(function(response){return response.json()})
        .then((data) => {
        this.setState({
          Data : data
        })
        
        })
        .catch(err=>{
        console.log(err)
        })


    super()
    this.state={
      Data : [],
      Scanned: true,
    }
    this.returnScanned = this.returnScanned.bind(this)
    this.goScanned = this.goScanned.bind(this)
    
  }
  returnScanned(e){
    this.setState({ Scanned: false})
  }
  goScanned(e){
    this.setState({ Scanned: true})
  }
render(){ 
  return (
    <View style={styles.container}> 
      {
        this.state.Scanned == true ?
        <Scanqr againScanned={this.returnScanned}>
        </Scanqr>
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
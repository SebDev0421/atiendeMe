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
  
   getData= async()=>{
    try{
      let qrData = await AsyncStorage.getItem('key')
      alert(`${qrData}`)
    }catch(error){
      alert(error)
    }
  } 
  constructor(){



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
  async componentDidMount(){
    const URI = 'http://181.54.182.7:5000/api/temporal/hospital/user'
            const OptionAPI ={ 
            method: 'PUT',
            body: JSON.stringify({
              _id:Key,
            }),
            headers: {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            }
          }
          await fetch(URI,OptionAPI).then(function (res){return res.json()})
            .then((data)=>{
              this.setState({
                Data : data
              })                   
            console.log(data)
            })
            .catch(err=>console.log(err))
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
      <Button title="GG" onPress={()=>this.getData()} /> 
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
import React, {Component} from 'react'
import { StyleSheet, 
          Text, 
          View,
          Button,
          TouchableOpacity,
          Alert,
          Image
        } from 'react-native';
import  MapView,
        {Marker,
        Polyline,
        Callout,
        PROVIDER_GOOGLE,
        GOOGLE_MAPS_APIKEY,
        
      } from 'react-native-maps'; 

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Reload from '../Img/Reload.png'





class App extends Component {

  constructor (props){

    
    super(props);

    setInterval(() => {
      this._getLocationAsync();
    }, 200);

   /*  setInterval(() =>{
      this.componentDidMount();    
    },1000);

    setInterval(() =>{
      this.MapList();    
    },1000); */



    this.state={
      Nombre:null,
      Hospitals:[],
      /* Hospitals:[ {latitude: 4.699050, longitude: -74.050105},
        {latitude: 4.671959, longitude: -74.083579},
        {latitude: 4.683959, longitude: -74.083579},
      ], */
      Mapa:[],
      location:null,
      errorMsg:null,
      UserLatitude:0.0,
      UserLongitude:0.0,
      HospitalCategory:'',
      Aux:0,
    };
  }



  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: '¡Ha ocurrido un error!.',
      });
    } else {
      this._getLocationAsync();
      this.setState({Aux: 1})
      
    }
  }


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let {Aux} = this.state;
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    if ( Aux !== 0){
      let location = await Location.getCurrentPositionAsync({});
      let UserLongitude = this.state;
      this.setState({ location });
      this.setState({UserLatitude: location.coords.latitude, UserLongitude: location.coords.longitude})
    }


  };


  async componentDidMount(){
    
    const url = 'http://181.54.182.7:5000/api/hospitals'
    const response = await fetch(url)
    let data = await response.json()
    //console.log(data)

      this.setState({
        Mapa:data
      })

      let DataRead = this.state.Mapa 
      let Go  = []
      DataRead.map(function(arr){
        
        const obj={
          latitude:arr.lat,
          longitude:arr.lng,
          title:arr.name,
          address:arr.address,
          category:arr.category
        }
        Go.push(obj)
        console.log(obj)
      })
      this.setState(
        {
          Hospitals:Go
        }
      )
      
    
  }


  GoToQR = (HN,HA) =>{
    const {navigation}= this.props;
    navigation.navigate('QR', {HospitalName: HN, HospitalAddres:HA, UserLatitude: this.state.UserLatitude, UserLongitude: this.state.UserLongitude })
  }

  MarkerColor  (HT, r){
    let color='';
    let category='';
    let marker = [];

    if (HT === 1){
      //this.setState({HospitalCategory: 'Covid-19'})
      category='Covid-19'
      color='green'
    }else 
      if (HT === 2){
        //this.setState({HospitalCategory: 'Medicina general'})
        category='Medicina general'
        color='yellow'
      }else
        if(HT === 3){
          //this.setState({HospitalCategory: 'Odontología'})
          category='Odontología'
          color='blue'
        }else{
          //this.setState({HospitalCategory: 'No definido'})
          category= 'No definido'
          color='black'
        }
    //this.setState({HospitalCategory: category})
    
    if (r ===0){
      return(color)
    }else{
      return(category)
    }

  }

  MapList = () =>{
    return(
      this.state.Hospitals.map( (x,i) =>{    
        return(
          <Marker 
            coordinate={
              {latitude: parseFloat(x.latitude) , 
              longitude: parseFloat(x.longitude)} 
            } 
            key={i}
            pinColor={this.MarkerColor(x.category,0)}
          >
            <Callout  onPress ={() => this.GoToQR(x.title,x.address)} >
                  <Text>
                    {x.title}
                  </Text>
                  <Text style={{alignSelf:'center'}} >
                    {this.MarkerColor(x.category,1)}
                  </Text>
                  <Text style={{alignSelf:'center'}} >
                    {x.address}
                  </Text>       
            </Callout>
          </Marker>
        )
      } )
    ); 
  }   


  render(){

    const Bogotá_Coordinates ={ latitude: 4.6097100,
                                longitude: -74.0817500,
                                latitudeDelta: 0.27, /*0.0922*/
                                longitudeDelta: 0.27, /*0.0421*/};

      return (

        <View style={styles.container}>





          <View style={styles.mapContainer}>
            <MapView 
                style={styles.mapStyle} 
                showsUserLocation={true}
                ref='map'
                initialRegion={Bogotá_Coordinates}
              >
                
                {this.MapList()}
                
              </MapView>
              
          </View>  

            <View style={{flex:1, marginTop:'8%',alignItems:'flex-end', marginHorizontal:'5%'}} >
              <TouchableOpacity
                onPress={()=> this.componentDidMount(), this.MapList()}
              >
                <Image 
                  source={Reload}
                  style={styles.image}
                >
                </Image>                
              </TouchableOpacity>
            </View>     
          
        </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:'15%',
    //flexDirection:'row'
    
  },

  mapStyle:{
    flex:1,
  },

  mapContainer:{
    flex:10,
    borderColor:'black',
    borderWidth:1,
    marginHorizontal:'3%',
    //marginVertical:'7%',
    width:'95%',
    height:'90%',
    borderRadius:4,
  },

  image:{
    width:60,
    height:60,
    borderRadius:30,
    //flex:1
  },

});
export default App
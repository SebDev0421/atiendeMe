import React, {Component} from 'react'
import {StyleSheet, 
        Text, 
        View,
        Button,
        TextInput,
        Picker,
        Alert,
        ScrollView,
        AsyncStorage
        } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';



class Start extends Component {



    constructor(props){
        super(props);
        // HARD CODED DATA , YOU CAN REPLACE THIS DATA  WITH API CALL DATA IN ComponentDidMount() 
       //or in Constructor because countryData is not state.
        this.IdentificationData = ["Tipo de identificacion","CC","NIT","NA"];
        this.EPSData=["EPS","Sura","Compensar","Sisben"];
        this.LocalidadData=["Localidad","Suba","Rafael Uribe Uribe",""]
        // STATE    
        this.state={
            selectedIdentificationType : null,
            selectedEPSType : null,
            selectedLocalidad : null,
            UserStatus: null,
            Name:'',
            NI:'',
            Address:'',
            StateMessage:'',
            Edad:'',
            Email:'',
            Password:'',
            PhoneNumber:'',
            FPhoneNumber:'',
            
        };
    }


    saveData(){   
        let {Name} =this.state;
        let {NI} = this.state;
        let {Edad} =this.state;
        let {Email} = this.state;
        let {Address} = this.state;
        let {PhoneNumber} = this.state;
        let {Password} = this.state;
        let {FPhoneNumber} = this.state;
        let {Bogota} = 'Bogota'
        AsyncStorage.setItem('UserData',JSON.stringify({

                                    name: Name,
                                    nit: NI,
                                    age: Edad,
                                    email: Email,
                                    psw: Password,
                                    phone: PhoneNumber,
                                    familarPhone: FPhoneNumber,
                                    city: 'Bogota',
                                    address: Address,
                                    
                                    })
            ); 
/*         AsyncStorage.setItem('name', Name)
        AsyncStorage.setItem('nit', NI)
        AsyncStorage.setItem('email', Password)
        AsyncStorage.setItem('phone',PhoneNumber)
        AsyncStorage.setItem('familarPhone',FPhoneNumber)
        AsyncStorage.setItem('city', Bogota)
        AsyncStorage.setItem('address', Address) */

        /* AsyncStorage.setItem(   'name', Name,
                                'nit', NI,
                                'email', Password,
                                'phone', PhoneNumber,
                                'familarPhone', FPhoneNumber,
                                'city', Bogota,
                                'address', Address
                            ) */
            //'user',name  

            //console.log('Added')
            //this.displayData()

        }  
    displayData = async ()=>{  
        try{  
            let user = await AsyncStorage.getItem('UserData');  
            alert(user);  
        }  
        catch(error){  
            alert(error)  
        }  
    }
    

    


    IdentificationList = () =>{
        return( this.IdentificationData.map( (x,i) => { 
                return( <Picker.Item label={x} key={i} value={x}  />)} ));
    }


    EPSList = () =>{
        return( this.EPSData.map( (x,i) => { 
                return( <Picker.Item label={x} key={i} value={x}  />)} ));
    }


    LocalidadList = () =>{
        return( this.LocalidadData.map( (x,i) => { 
                return( <Picker.Item label={x} key={i} value={x}  />)} ));
    }


    SingIn = () =>{
        let {Nombre} =this.state;
        let {NI} = this.state;
        let {Direccion} = this.state;

        if ((Nombre !== "") && (NI !== "") && (Direccion !== "")){
            this.submit()
        }
        if (Nombre === ""){ //Ingrese los datos en todos los campos requeridos.
            this.setState({StateMessage: 'Ingrese su nombre'})
        }
        if(NI === ""){
            this.setState({StateMessage: 'Ingrese su número de identificación'})
        }
        if(Direccion === ""){
            this.setState({StateMessage: 'Ingrese la dirección de su lugar de residencia'})
        }
    }
    
    
    /* location:{
        lat:lat
        lng:lng
      } */
      // {name, nit, age, email, psw, phone, familiarPhone, city, location, address}


    async submit() {
        let {Name} =this.state;
        let {NI} = this.state;
        let {Edad} =this.state;
        let {Email} = this.state;
        let {Address} = this.state;
        let {PhoneNumber} = this.state;
        let {Password} = this.state;
        let {FPhoneNumber} = this.state;
        const { navigation } = this.props;

        /* collection.username=Nombre,
        collection.email=NI,
        collection.kode_ujian=Direccion */

        try{
            fetch('http://181.54.182.7:5000/api/users', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            },
            body: JSON.stringify({
            name: Name,
            nit: NI,
            age: Edad,
            email: Email,
            psw: Password,
            phone: PhoneNumber,
            familarPhone: FPhoneNumber,
            city: 'Bogota',
            location:{
                lat:74.56,
                lng:2.65
            },
            address: Address,
            
            
            }) 
        })
        .then((response) => response.json())
            .then((text) => {
            console.log(text)
            console.log(text.status);
            this.setState({UserStatus: text.status})


            if (this.state.UserStatus === "user already exist"){
                this.setState({StateMessage: 'Este usuario ya existe'})
            }
            if (this.state.UserStatus === "user was add"){
                console.log('RRR')
                this.saveData()
                navigation.navigate('Login')
            }

            })
            .catch(err=>{
            console.log(err)
            })
        }catch(err){

        }
        
    }
    
    
    




    render(){

    
    let {StateMessage} = this.state;

        return (

        
            <ScrollView>
            <View style={styles.container}>

                <LinearGradient 
                    colors={[   'rgba(222,239,246,1)', 
                                'rgba(255,255,255,0.8)']} 
                    style={{flex:1}}
                >


                    <View style={styles.viewTextImput} >

                        <TextInput  
                            style={styles.TextInput} 
                            onChangeText={(Name) => this.setState({Name})}
                            placeholder= "Nombre"
                        />

                        <TextInput
                            style={styles.TextInput} 
                            onChangeText={(Edad) => this.setState({Edad})}
                            placeholder= "Edad"
                        />

                        <TextInput
                            style={styles.TextInput} 
                            onChangeText={(Email) => this.setState({Email})}
                            placeholder= "Email"
                        />

                        <TextInput
                            style={styles.TextInput} 
                            onChangeText={(Password) => this.setState({Password})}
                            placeholder= "Contraseña"
                        />

                        <TextInput
                            style={styles.TextInput} 
                            onChangeText={(PhoneNumber) => this.setState({PhoneNumber})}
                            placeholder= "Número de teléfono"
                        />

                        <TextInput
                            style={styles.TextInput} 
                            onChangeText={(FPhoneNumber) => this.setState({FPhoneNumber})}
                            placeholder= "Numero telefónico de un familiar"
                        />

                        <View style={styles.TextInput} >
                            <Picker
                                selectedValue={this.state.selectedEPSType}
                                onValueChange={ (value) => ( this.setState({selectedEPSType : value}) )}>
                                { this.EPSList() }
                            </Picker>                        
                        </View> 

                        <View style={styles.TextInput} >
                            <Picker
                                selectedValue={this.state.selectedIdentificationType}
                                onValueChange={ (value) => ( this.setState({selectedIdentificationType : value}) )}>
                                { this.IdentificationList() }
                            </Picker>                        
                        </View>

                        <TextInput  style={styles.TextInput} 
                                    placeholder="Número de identificación"
                                    onChangeText={(NI) => this.setState({NI}) }
                        />

                        <TextInput  style={styles.TextInput} 
                                    placeholder="Direccion"
                                    onChangeText={(Address) => this.setState({Address})}
                        />

                        <View style={styles.TextInput} >
                            <Picker
                                selectedValue={this.state.selectedLocalidadType}
                                onValueChange={ (value) => ( this.setState({selectedLocalidadType : value}) )}>
                                { this.LocalidadList() }
                            </Picker>                        
                        </View>

                        <View style={{alignItems:'center'}} >
                        <Text style={{  }} >
                            {StateMessage}
                        </Text>
                        </View>

                        <View  style={styles.Button} >
                            <Button 
                                title="Siguiente"
                                onPress={() => this.SingIn()}
                            >

                            </Button>                        
                        </View>

                    </View>
                    

                </LinearGradient>     
            
            </View>
            </ScrollView>
        );
    }

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    //backgroundColor: '#fff',
    //paddingBottom:'15%'   
    
  },

  buttonLeft:{
    //flex:1,
    margin:'3%',
  },

  buttonRight:{
    margin:'3%',
    
  },

  viewTextImput:{
      marginTop:'15%',
      flex:1,
      flexDirection:'column',
  },

  TextInput:{
      borderColor:'gray',
      borderBottomWidth:1,
      marginTop:'5%',
      marginHorizontal:'17%'
  },

  Button:{
      marginTop:'5%',
      width:'30%',
      height:'10%',
      marginLeft:'63%',
      marginBottom:'15%'
      //flex:1
  },




});
export default Start
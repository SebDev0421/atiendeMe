import React, {Component} from 'react'
import {    StyleSheet, 
            Text, 
            View,
            Button,
            TouchableOpacity,
            Alert,
            TextInput,
            AsyncStorage
        } from 'react-native';
import {QRCode} from 'react-native-custom-qr-codes-expo';


class QR extends Component{

    constructor() {
        super();
        this.state = {
            valueForQRCode: 'n',
            HospitalsInfo:null,
            Aux:[],
        };
    }


    async submit(obj) {
        const {navigation}= this.props;

        try{
            fetch('http://181.54.182.7:5000/api/temporal', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            },
            body: JSON.stringify({
            
                obj,
                nameh: JSON.stringify(navigation.getParam('HospitalName', '')),
                lat: JSON.stringify(navigation.getParam('UserLatitude', '')),
                lng: JSON.stringify(navigation.getParam('UserLongitude', '')),
            
            }) 
        })
        .then((response) => response.json())
            .then((text) => {
            //console.log(text._id)
            console.log(text._id.toString())
            this.setState({valueForQRCode: (text._id).toString()})
            })
            .catch(err=>{
            console.log(err)
            })
        }catch(err){

        }
        
    }


    displayData = async ()=>{  
        try{  

            let user = await AsyncStorage.getItem('UserData'); 
            const {navigation}= this.props;
            //var obj =[]
            obj = JSON.parse(user)   
            this.submit(obj)

        }  
        catch(error){  
            alert(error)  
        }  
    }


    componentDidMount(){
        {this.displayData()}
    }


    render(){
        const {navigation}= this.props;
        return(

            <View style={styles.container} >
                <View style={styles.header} >
                    <Text>
                        Hospital: {JSON.stringify(navigation.getParam('HospitalName', ''))}
                    </Text>
                    <Text>
                        Direccion: {JSON.stringify(navigation.getParam('HospitalAddres', ''))}
                    </Text>
                </View>
                
                <View style={styles.QR} >
                    <QRCode
                        
                        content={this.state.valueForQRCode} 
                        logosize={250}
                        color="#000"
                    />                    
                </View>


                <View style={styles.Button} >
                    <Button
                        title="Mapa"
                        onPress={() => navigation.navigate('Hospitals')}
                    />
                </View>
                
            </View>

        )

    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        alignContent:'center',
        marginTop:'15%',
        //marginBottom:'5%',
        //backgroundColor: '#fff',
    },

    QR:{
        //marginTop:'10%',
        flex:4,
        
        

    },

    header:{
        flex:1,
        //marginVertical:'1%',
    },

    buttonLeft:{
      //flex:1,
        margin:'5%',
    },

    buttonRight:{
        //flex:1,
        margin:'3%',
        //marginHorizontal:'3%'
    },

    viewTextImput:{
        marginTop:'15%',
        flex:1
    },

    TextInput:{
        borderColor:'gray',
        borderBottomWidth:1,
        marginTop:'5%',
        marginHorizontal:'17%'
    },

    Button:{
        marginTop:'10%',
        width:'20%',
        height:'30%',
        marginLeft:'60%',
        alignItems:'flex-end',
        flex:1
    },

    MainContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        paddingTop: 40,
    },
    
    TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
    },
    
    button: {
    width: '10%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    marginHorizontal:'15%',
    //backgroundColor: '#F44336',
    marginBottom: 20,
    },
    
    TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    },

});
export default QR
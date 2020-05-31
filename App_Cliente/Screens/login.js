import React,{Component} from 'react'
import {View,
        StyleSheet,
        Text, 
        TextInput, 
        TouchableOpacity,
        AsyncStorage
    } from 'react-native'
import Styles from '../styles/style'
export default class Login extends Component{

    constructor(props){
        super(props);  
        this.state={
            Nit:'',
            Password:'',
            StateMessage:'',
        };
    }

    GoRegister () {
        const { navigation } = this.props;
        navigation.navigate('Register')
    }

    Login = () =>{
        let {Nit} = this.state;
        let {Password} = this.state;

        if(Nit === ""){
            this.setState({StateMessage: 'Digite el NIT'})
        }else{
            if(Password === ""){
                this.setState({StateMessage: 'Digite el NIT'})
            }else{
                this.submit()
            }
        }

    }


    saveData(Data){  
    //let name = "Michal";  
    AsyncStorage.setItem('UserData',Data);  
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

    async submit() {
        let {Password} =this.state;
        let {Nit} = this.state;
        let {navigation} = this.props
        
        try{
            fetch('http://181.54.182.7:5000/api/users/login', {
            method: 'PUT',
            headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            },
            body: JSON.stringify({
            password: Password,
            nit: Nit,
            }) 
        })
        .then((response) => response.json())
            .then((text) => {
            console.log(text)
            console.log('Status\n'+text.status);
            this.setState({UserStatus: text.status})

            if (this.state.UserStatus !== "dont exist user" && this.state.UserStatus !== "error password" ){
                console.log('RRR')
                this.saveData(JSON.stringify(text))

                //navigation.navigate('Hospitals')
                navigation.navigate('Hospitals')
            }

            })
            .catch(err=>{
            console.log(err)
            })
        }catch(err){

        }
        
    }

    render(){
        return(
            <View style={style.container}>
                <View style={style.header}>
                </View>
                <View style={style.body}>
                    <View style={style.bodyContent}>
                        <View style={style.bodyHeader}>
                            <Text style={Styles.TextBig}>Sign in</Text>
                        </View>
                        
                        <View style={style.bodyText}>
                            <TextInput 
                                placeholder="NIT"
                                style={style.textInput}
                                onChangeText={(Nit) => this.setState({Nit})}
                            />
                            <TextInput 
                                placeholder="Password"
                                style={style.textInput}
                                onChangeText={(Password) => this.setState({Password})}
                            /> 
                            <Text style={Styles.TextError}>{this.state.StateMessage}</Text>   
                        </View>
                        <View style={style.bodyFooter}>
                            <TouchableOpacity style={Styles.buttonSecondary} onPress={()=>{this.GoRegister()}}> 
                                <Text style={{color:'#2BAEF7'}}> Registro </Text>
                            </TouchableOpacity> 
                            <TouchableOpacity style={Styles.buttonPrimary} onPress={()=>{this.Login()}}> 
                                <Text style={Styles.TextButton}> Ingresar </Text>
                            </TouchableOpacity> 
                                

                        </View>
                    </View>
                    
                </View>
                <View style={style.footer}>
                
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:1
    },
    body:{
        flex:4
    },
    footer:{
        flex:1
    },
    bodyContent:{
        flex:3,
        margin:"5%",
        borderColor: 'black',
        borderWidth:1,
        borderRadius: 15
        
    },
    bodyFooter:{
        flex:0.5,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    bodyText:{
        flex:1.5,
        margin:"5%",
        justifyContent:'center'
    },
    textInput:{
        marginTop: '15%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 16,
        backgroundColor:"#EEEAEA",
        height:"13%"
    },
    bodyHeader:{
        flex:0.5,
        justifyContent:'flex-end',
        alignItems:'center',
        
    }
})
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Style from '../styles/style'
import * as Font from 'expo-font'
import	{AppLoading} from 'expo'
import Info from './info'

const fetchFonts = ()=>{
    return Font.loadAsync({
        'roboto-bold' : require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('../assets/fonts/Roboto-Italic.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('../assets/fonts/Roboto-Light.ttf')
    })
}
export default function InfoLayaout(props){  
    const [dataLoaded, setDataLoaded] = useState(false)
    if(!dataLoaded){
        return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={()=>setDataLoaded(true)}
        />
        )
    }
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontFamily: 'roboto-regular'}, Style.TextHeadline}>
                Escanea el código QR
                para validar la información
            </Text>
        </View>
        <View style={styles.body}>
            <View style={styles.bodyContent}>
                {/* <Text> {props.Datos} </Text> */}
                <Info datos = {props.Datos}></Info>
            </View>
            <View style={styles.bodyFooter}>
                <TouchableOpacity style={Style.button}> 
                    <Text style={ {fontFamily: 'roboto-medium'}, Style.TextButton}> Ingresa </Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>
        </View>
    </View>
    )  
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer:{
        flex: 1,
    },
    header:{
        paddingTop: '20%',
        flex:0.5,
        alignItems: 'center',
        opacity: 0.27
    },
    body:{
        padding: '5%',
        flex: 3.5,
        backgroundColor: 'white'
    },
    bodyFooter:{
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderTopColor: 'white',
        borderBottomRightRadius: 16,
        borderBottomLeftRadius: 16
    },
    bodyContent:{
        flex:2,
        padding: '10%',
        borderColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderBottomColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
})
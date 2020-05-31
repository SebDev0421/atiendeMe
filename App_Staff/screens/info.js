import React, {useState} from 'react'
import {Text,View} from 'react-native'
import Style from '../styles/style'

import * as Font from 'expo-font'
import	{AppLoading} from 'expo'

const fetchFonts = ()=>{
    return Font.loadAsync({
        'roboto-bold' : require('../assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('../assets/fonts/Roboto-Italic.ttf'),
        'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('../assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('../assets/fonts/Roboto-Light.ttf')
    })
}

export default function Info(props){
    const [dataLoaded, setDataLoaded] = useState(false)
    if(!dataLoaded){
        return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={()=>setDataLoaded(true)}
        />
        )
    }
    return(
        <View>
            <Text style={{fontFamily: 'roboto-regular'}, Style.TextMenu}> 
                {props.datos.name}
            </Text>
            <Text style={{fontFamily: 'roboto-regular'}, Style.TextMenu}> 
                {props.datos.nit}
            </Text>
            <Text style={{fontFamily: 'roboto-regular'}, Style.TextMenu}> 
                {props.datos.nameH}
            </Text>
            <Text style={{fontFamily: 'roboto-regular'}, Style.TextMenu}> 
                {props.datos.time}
            </Text>
        </View>
        
    )
}

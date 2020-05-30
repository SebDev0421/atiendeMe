
import {useState} from 'react'
import * as Font from 'expo-font'
import	{AppLoading} from 'expo'

const fetchFonts = ()=>{

    return Font.loadAsync({
        'roboto-bold' : require('./assets/fonts/Roboto-Bold.ttf'),
        'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'roboto-light': require('./assets/fonts/Roboto-Light.ttf')
    })
}

export default function Fonts(){
    const [dataLoaded, setDataLoaded] = useState(false)
        if(!dataLoaded){
            return(
            <AppLoading
                startAsync={fetchFonts}
                onFinish={()=>setDataLoaded(true)}
            />
        )
    }
}
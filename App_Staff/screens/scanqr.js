import React , {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import Qr from './qr'
import Style from '../styles/style'


export default function Scanqr(props){

    const {_receivedKey} = props   

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
                    <Qr/>
                </View>
            </View>    
        </View>
    )  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        paddingTop: '20%',
        flex:0.5,
        alignItems: 'center'
    },
    body:{
        padding: '5%',
        paddingLeft: '10%',
        paddingRight:'10%',
        flex: 4
    },
    bodyContent:{
        flex:1,
        borderColor: 'black',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 16
    }
})

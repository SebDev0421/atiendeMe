import React, { useState, useEffect, Component } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Data from '../src/data/data.json'

export default function Qr(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
    }, []);
    const handleBarCodeScanned = ({data}) => {
        
        setScanned(true);
        Data.push({
            Key: data 
        })
    console.log(data)
    
        // alert(`${data}`); 
        
    }
    if (hasPermission === null) {
    return <Text>Solicitar permiso de cámara</Text>;
    }
    if (hasPermission === false) {
    return <Text>No accesso a la camera</Text>;
    }
    return (
        <View
            style={{
            flex: 1
            }}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned   && props.scanned    }
            style={StyleSheet.absoluteFillObject}
            />

            {scanned }
        </View>
    );
}
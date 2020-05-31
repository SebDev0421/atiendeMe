import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, ImagePropTypes } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Qr(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    /* const {_receivedKey} = this.props */
    useEffect(() => {
    (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
    })();
    }, []);
    var id
    const handleBarCodeScanned = ({data}) => {
    setScanned(true);
    data = id
    };

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
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned && props.scanned && props.keyId}
        style={StyleSheet.absoluteFillObject}
        />

        {scanned }
    </View>
    );
}

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import QR from './Screens/QRcode'
import Register from './Screens/Register';
import Login from './Screens/login';
import MapHospitals from './Screens/MapHospitals';


console.disableYellowBox = true;

const RootStack = createStackNavigator(
  {
  Register: Register,
  QR: QR,
  Login:Login,
  Hospitals:MapHospitals,
  },
  {
    initialRouteName: 'Hospitals', //Login
    headerMode:'none'
  },
  
);

export default createAppContainer(RootStack);
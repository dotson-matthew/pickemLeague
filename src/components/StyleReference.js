import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';

function StyleReference(){
  return (styles);
}
export default StyleReference;
const screenWindow = Dimensions.get('window');
const buttonWidth = screenWindow.width * 0.39;
const profilePhotoSpacerH = screenWindow.width * 0.02;
const profilePhotoSpacerV = screenWindow.height * 0.02;
const rowSpacerV = screenWindow.height * 0.005;
const buttonSizerH = screenWindow.width * 0.4;
const buttonSizerV = screenWindow.height * 0.1;
const buttonRSizerH = screenWindow.width * 0.85;
const buttonRSizerV = screenWindow.height * 0.1;
const buttonLSizerH = screenWindow.width * 0.25;
const buttonLSizerV = screenWindow.height * 0.1;
const textSizer = screenWindow.width * 0.06;
const imageSizer = screenWindow.width * 0.33;
const spacerSizerV = screenWindow.height* 0.015;
const spacerSizerH = screenWindow.width* 0.05;


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
  },
  rowWhite: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
  home_container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex:1,
    backgroundColor:COLORS.lightGray,
    padding: 25,

  },
  buttonLittle: {
    backgroundColor: COLORS.lightBlue,
    height: buttonLSizerV, 
    width: buttonLSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonMedium: {
    backgroundColor: COLORS.lightBlue,
    height: buttonSizerV, 
    width: buttonSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonRectangle: {
    backgroundColor: COLORS.lightBlue,
    height: buttonRSizerV, 
    width: buttonRSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonRectangleCancel: {
    backgroundColor: COLORS.red,
    height: buttonRSizerV, 
    width: buttonRSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText:{
    fontSize: textSizer,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    textAlign: 'center',
    marginTop: 1,
  },
  boxText:{
    fontSize: textSizer,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black',
    textAlign: 'center',
    marginTop: 1,
  },  
  profilePhoto:{
    width: imageSizer,
    height: imageSizer, 
    borderRadius: 400/ 2,
    borderColor: 'black',
    borderWidth: 3 
    
  },
  nflLogo:{
    width: imageSizer,
    height: imageSizer, 
    borderColor: 'black',
    borderWidth: 3 
  },
  imageBox:{
    paddingHorizontal: profilePhotoSpacerH,
    paddingVertical: profilePhotoSpacerV,
    justifyContent: 'space-evenly',
    

  },
  categoryBox:{
    height: buttonLSizerV,
    width: buttonLSizerH,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 3, 
    borderRadius: 10
    

  },
  spacer:{
    flexDirection: 'row',
    marginVertical: spacerSizerV, 
  }
  
});
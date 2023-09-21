import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image,StatusBar} from 'react-native';
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
const imageSizer = screenWindow.width * 0.25;
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
  rowS: {
    flexDirection: 'row',
    borderBottomWidth: 3 ,
    borderBottomColor:'black',  
    justifyContent: 'space-evenly',
    
  
  },
  rowLogin: {
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV*2
    
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
  buttonModal: {
    backgroundColor: COLORS.red,
    height: buttonLSizerV/2, 
    width: buttonLSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonLittle: {
    backgroundColor: COLORS.lightBlue,
    height: buttonLSizerV, 
    width: buttonLSizerH*1.10,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:1

  },
  buttonLittleTriple: {
    backgroundColor: COLORS.yellow,
    height: buttonLSizerV*1.15, 
    width: buttonLSizerH*1.10,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    marginHorizontal:1

  },
  buttonLittleLocked: {
    backgroundColor: COLORS.gray,
    height: buttonLSizerV, 
    width: buttonLSizerH*1.10,
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
    fontSize: textSizer*.8,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    textAlign: 'center',
    marginTop: 1,
  },
  loginTextPrompt:{
    fontSize: textSizer*.80,
    fontWeight: 'bold',
    
    color: 'black',
    textAlign: 'center',
    marginTop: 1,
  },
  loginTextInput:{
    fontSize: textSizer*.60,
    fontWeight: 'bold',
    fontStyle: 'italic',
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
  boxText2:{
    fontSize: textSizer/2,
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
  categoryBoxRectangle:{
    height: buttonLSizerV,
    width: buttonLSizerH*3.3,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 3, 
    borderRadius: 10,
    marginVertical: 3,
    

  },
  categoryBox:{
    height: buttonLSizerV,
    width: buttonLSizerH,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 3, 
    borderRadius: 10,
    
    
    

  },
  categoryBox2:{
    height: buttonLSizerV/2,
    width: buttonLSizerH,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 3, 
    borderRadius: 10,
    marginVertical: rowSpacerV
    

  },
  categoryBoxBigger:{
    height: buttonLSizerV,
    width: buttonLSizerH*1.5,
    justifyContent: 'space-evenly',
    borderColor: 'black',
    borderWidth: 3, 
    borderRadius: 10,
    marginVertical: rowSpacerV
    
    

  },
  spacer:{
    flexDirection: 'row',
    marginVertical: spacerSizerV, 
  },
  textStyle: {
    marginVertical: 50  

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  
});
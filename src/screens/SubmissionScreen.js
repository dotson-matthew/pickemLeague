import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import NFL_Logo from '../../assets/NFL_Logo.jpg'
import Glennon from '../../assets/Mike_Glennon.jpg';
import SubmissionButton from '../components/SubmissionButton';
import StyleSheet69 from '../components/StyleReference'
const styles = StyleSheet69();

function SubmissionScreen({ navigation, route }) {
    
  
    const [selectionSet, setSelectionSet] = React.useState(['','','','','','','','']);
    const [triple, setTriple] = React.useState('');
  
    return (
  
    <View style = {styles.box}>
      <View >
        
        <SubmissionButton sel={selectionSet[0]} selNum={0} set={selectionSet}/>
      </View>
    
        <View>
          <Text>{JSON.stringify(selectionSet)}</Text>
        </View>
    </View>
      
    );
  }



export default SubmissionScreen;



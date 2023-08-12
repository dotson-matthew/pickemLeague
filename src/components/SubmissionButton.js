import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Button, StyleSheet, Text, View, TextInput} from 'react-native';
import StyleSheet69 from './StyleReference';
const styles = StyleSheet69();


const SubmissionButton = ({selNum}) => {
  var title = '';
  var primeTime = false;
  var triplePlay = false;
  switch (selNum){
    case 0:{
      title = 'PYO #1'
      break;
    }
    case 1:{
      title = 'PYO #2'
      break;
    }
    case 2:{
      title = 'PYO #3'
      break;
    }
    case 3:{
      title = 'PYO #4'

      break;
    }
    case 4:{
      title = 'PYO #5'
      break;
    }
    case 5:{
      primeTime = true;
      title = 'SNF'
      break;

    }    
    case 6:{
      primeTime = true;
      title = 'MNF'
      break;
    }
    case 7:{
      triplePlay = true;
      title = 'Triple Play'
    }
    
    
  }
    return (
        <View>
            <TouchableOpacity>
              <View style={styles.buttonLittle}>
                <Text style={styles.buttonText}>{title}</Text> 
              </View>
            </TouchableOpacity>
        </View>
        
    )
}

export default SubmissionButton;
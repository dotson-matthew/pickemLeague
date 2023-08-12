import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import SubmissionButton from '../components/SubmissionButton';
import StyleSheet69 from '../components/StyleReference'
const styles = StyleSheet69();

function ConfirmationScreen({ navigation }) {
  
    return (
      <View style={{flex:1, alignItems:'center'}}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={styles.buttonRectangle}>
            <Text style={styles.buttonText}>
              Submit
            </Text>
    
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.pop()}>
          <View style={styles.buttonRectangleCancel}>
            <Text style={styles.buttonText}>
              Cancel
            </Text>
    
          </View>
        </TouchableOpacity>
        
      </View>
      
  
      
      
    );
  }

export default ConfirmationScreen;


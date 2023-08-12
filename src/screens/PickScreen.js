import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import SubmissionButton from '../components/SubmissionButton';
import StyleSheet69 from '../components/StyleReference'
const styles = StyleSheet69();

function PickScreen({ navigation, route }) {
  
    return (
      
      <TouchableOpacity onPress={() => navigation.pop()
      }>
        <View style={styles.buttonLittle}>
          <Text style={styles.buttonText}>
            Press Me!
          </Text>
  
        </View>
      </TouchableOpacity>
  
      
      
    );
  }

export default PickScreen;
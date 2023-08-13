import * as React from 'react';
import Select from 'react-select';
import { Button, StyleSheet, Text, 
  View, TextInput, TouchableOpacity, 
  Dimensions, Image} 
  from 'react-native';

import SubmissionButton from '../components/SubmissionButton';
import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();


function SubmissionScreen({ navigation, route }) {
 
  
  const [selectionSet, setSelectionSet] = React.useState(['1','2','3','4','5','6','7','8']);
  const [triple, setTriple] = React.useState(-1);
  const [locked, setLocked] = React.useState([0,0,0,0,0,0,0,0,0]);



  

  return (

  <View style = {styles.box}>
    <View style = {styles.row}>
      <View style = {styles.categoryBoxRectangle}>
        <Text style = {styles.boxText}>
          PYO 1-6:
        </Text>
        
      </View>
    </View>
    <View style = {styles.row}>
      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={0}
      />

      <SubmissionButton
      
      navigation = {navigation} 
      selNum={1}
      />
      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={2}/>

      
    </View>
    <View style = {styles.row}>
      

      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={3}
      />

      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={4}/>

      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={5}/>
    </View>

    <View style = {styles.spacer}/>

    <View style = {styles.row}>
      <View style = {styles.categoryBox}>
        <Text style = {styles.boxText}>
          Prime
        </Text>
        <Text style = {styles.boxText}>
          Time:
        </Text>
      </View>
      

      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={6}/>

<SubmissionButton 
      
      navigation = {navigation} 
      selNum={7}/>
    </View>

    <View style = {styles.spacer}/>

    <View style = {styles.row}>
      <View style = {styles.categoryBox}>
        <Text style = {styles.boxText}>
          Triple
        </Text>
        <Text style = {styles.boxText}>
          Play:
        </Text>
      </View>

      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={8}/>

      
    </View>
    <View style = {styles.spacer}/>

    <View style = {styles.spacer}/>
    <View style = {styles.row}>  
      <SubmissionButton 
      
      navigation = {navigation} 
      selNum={9}/>

    </View>
    
    
    
    
    <View>
      <Text>{JSON.stringify(selectionSet)}</Text>
      
    </View>
  </View>
  
      
    );
  }



export default SubmissionScreen;



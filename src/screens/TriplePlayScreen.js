import * as React from 'react';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import SubmissionButton from '../components/SubmissionButton';
import { SelectList } from 'react-native-dropdown-select-list';

import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();

function TriplePlayScreen({ navigation, route }) {
  const [selected,setSelected] = React.useState("");

  const data = [
      {key:'1', value:'Mobiles', disabled:true},
      {key:'2', value:'Appliances'},
      {key:'3', value:'Cameras'},
      {key:'4', value:'Computers', disabled:true},
      {key:'5', value:'Vegetables'},
      {key:'6', value:'Diary Products'},
      {key:'7', value:'Drinks'},
  ]



  return (
  <View style= {{flex:1, alignItems: 'center'}}>
      <View style = {styles.spacer}/>
      <SelectList
          setSelected={(val) => setSelected(val)}
          data = {data}
          save="value"
      />
      <View style = {styles.spacer}/>
      <TouchableOpacity onPress={() => navigation.pop()
      }>
          <View style={styles.buttonRectangle}>
          <Text style={styles.buttonText}>
              Submit Choice
          </Text>
  
          </View>
      </TouchableOpacity>
  </View>
    

    
    
  );
}

export default TriplePlayScreen;

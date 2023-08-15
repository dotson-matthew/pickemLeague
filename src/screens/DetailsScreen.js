import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import NFL_Logo from '../../assets/NFL_Logo.jpg'
import Glennon from '../../assets/Mike_Glennon.jpg';
import StyleSheet69 from '../components/StyleReference'
const styles = StyleSheet69();



/****************************************************************** */
function DetailsScreen({route, navigation}){
    const {itemId, price} = route.params;
    return (
      <View style={styles.details_container}>
        <Text>DetailsScreen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>price: {JSON.stringify(price)}</Text>
        <Button
          title="Go to Details....AGAIN"
          onPress={() => navigation.push('Details', {
            itemId: Math.floor(Math.random()*100),
          })}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  }
  
  /************************************************************************* */
  
  export default DetailsScreen;

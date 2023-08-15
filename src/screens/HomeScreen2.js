import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '../../assets/COLORS';
import NFL_Logo from '../../assets/NFL_Logo.jpg'
import Glennon from '../../assets/Mike_Glennon.jpg';
import Time from '../components/DateInDallas';
import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();





function HomeScreen({navigation, route}) {
  const [timeNow, setTimeNow] = React.useState(Time());

    React.useEffect(() => {
      if (route.params?.post) {
        route.params.post = route.params.post;
      }
    }, [route.params?.post]);
    
    return (
      <View style= {styles.home_container}>
        <Text>HomeScreen</Text>
        <Text>{JSON.stringify({timeNow})}</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details', 
          {
            itemId:86, price:'$'+4.30
          }
          )}
        />
        <Button
          title="Submission Screen"
          onPress={() => {
            
            navigation.push('Submission')
          }}
        />
        <Button
          title="Home Screen"
          onPress={() => {
            navigation.push('Home2')
          }}
        />
        <Button
          title="Change Title"
          onPress={() => navigation.setOptions({title:'Updated!'})}
        />
        <Button
          title="Create post"
          onPress={() => navigation.push('CreatePost')}
        />
        <Button
          title="Login"
          onPress={() => navigation.push('Login')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
    );
  }

  export default HomeScreen;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from './assets/COLORS';
import NFL_Logo from './assets/NFL_Logo.jpg';
import Glennon from './assets/Mike_Glennon.jpg';
import SubmissionScreen from './src/screens/SubmissionScreen';

import CreatePostScreen from './src/screens/CreatePostScreen';
import HomeScreen from './src/screens/HomeScreen';
import HomeScreen2 from './src/screens/HomeScreen2';
import DetailsScreen from './src/screens/DetailsScreen';
import LoginScreen from './src/screens/LoginScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen'

import StandingsScreen from './src/screens/StandingsScreen';
import LogoTitle from './src/components/LogoTitle';
import StyleSheet69 from './src/components/StyleReference';
const styles = StyleSheet69();

/*********************************************************************************
 * END IMPORT STATEMENTS *********************************************************
 * ******************************************************************************* */

/** Stack Navigation Creation */
const Stack = createNativeStackNavigator();
const WeekNumber= 6;


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home" 
      screenOptions ={
        {
          headerStyle:{
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
          }
        }
      }
      >
          <Stack.Screen 
            name = "Home2" 
            component={HomeScreen2} 
            
            options={{title: 'Overview'}}/>
          <Stack.Screen 
            name ="Details" 
            component={DetailsScreen}
            initialParams={{price: '$69.69'}}
          />
          <Stack.Screen
            name= "CreatePost"
            component= {CreatePostScreen}
            options={{title: 'Post Screen'}}
          />
          <Stack.Screen
            name= "Submission"
            component= {SubmissionScreen}
            options={{title: 'Submission for Week ' + WeekNumber}}
          />
          
          <Stack.Screen
            name= "Home"
            component= {HomeScreen}
            options={
            {
              headerTitle: (props) => <LogoTitle {...props}   />,
              title: "Home"
            }
          }
            
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: 'Login Page'}}
          />
          <Stack.Screen
            name="Confirm"
            component={ConfirmationScreen}
            options={{title: 'Confirm Pick Set'}}
          />
          
          
          <Stack.Screen
            name="Standings"
            component={StandingsScreen}
            options={{title: 'Standings'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
/***********************************************************************************
 * END APP container ***************************************************************
 ***********************************************************************************/

/*******************************************************************************
 * Begin base StyleSheet *******************************************************
 *******************************************************************************/






export default App;

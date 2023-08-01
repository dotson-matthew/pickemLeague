
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
  return (
    <View style= {styles.home_container}>
      <Text>HomeScreen</Text>
    </View>
  );
}
function DetailsScreen(){
  return (
    <View style={styles.details_container}>
      <Text>DetailsScreen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name = "Home" component={HomeScreen} options={{title: 'Overview'}}/>
          <Stack.Screen name ="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  details_container: {
    flex: 1,
    backgroundColor: '#aaf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home_container: {
    flex: 1,
    backgroundColor: '#ffa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;

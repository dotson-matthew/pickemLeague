import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
/*********************************************************************************
 * END IMPORT STATEMENTS *********************************************************
 * ******************************************************************************* */


/** Stack Navigation Creation */
const Stack = createNativeStackNavigator();

/***********************************************************************************
 * SCREENS ::::  Here lies the section for screens in the app **********************
 ***********************************************************************************/

function HomeScreen({navigation}) {
  return (
    <View style= {styles.home_container}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', 
        {
          itemId:86, price:'$'+4.30}
        )}
      />
    </View>
  );
}

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
/***********************************************************************************
 * END ::::::SCREENS :::::  ********************************************************
 ***********************************************************************************/



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name = "Home" 
            component={HomeScreen} 
            options={{title: 'Overview'}}/>
          <Stack.Screen 
            name ="Details" 
            component={DetailsScreen}
            initialParams={{price: '$69.69'}}
          />
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

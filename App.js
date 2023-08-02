import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

/*********************************************************************************
 * END IMPORT STATEMENTS *********************************************************
 * ******************************************************************************* */


/** Stack Navigation Creation */
const Stack = createNativeStackNavigator();
const WeekNumber= 6;
/*********************************************************************************
 * ***************    Components   ***********************************************
 *********************************************************************************/





/***********************************************************************************
 * SCREENS ::::  Here lies the section for screens in the app **********************
 ***********************************************************************************/
/*route allows us to send context back to other page with forward & backward parameters 
*/
function HomeScreen({navigation, route}) {
  React.useEffect(() => {
    if (route.params?.post) {
      route.params.post = route.params.post + 'Extra String';
    }
  }, [route.params?.post]);
  
  return (
    <View style= {styles.home_container}>
      <Text>HomeScreen</Text>
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
        title="Change Title"
        onPress={() => navigation.setOptions({title:'Updated!'})}
      />
      <Button
        title="Create post"
        onPress={() => navigation.push('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}
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

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}
/******************************************************************************* */

function SubmissionScreen({ navigation, route }) {
  const [selectionSet, setSelectionSet] = React.useState(['','','','','','','','']);
  

  return (

  <View>
    <View style={styles.row}>
      
      <Button
          title= {"PYO1 - " + JSON.stringify(selectionSet[0])}
          onPress={() => {
              selectionSet[0] = '0';
              setSelectionSet([...selectionSet])
          }}
      />
      <View style={styles.rowWhite}>
        <Button
            title= {"Triple Play - " + JSON.stringify(selectionSet[1])}
            onPress={() => {
                selectionSet[0] = '0';
                setSelectionSet([...selectionSet])
            }}
        />
      </View>

      <View>
        <Text>{JSON.stringify(selectionSet)}</Text>
      </View>
      <View>
        <Text>{JSON.stringify(items)}</Text>
      </View>

    </View>

  </View>
    
  );
}
function SubmissionScreen2({ navigation, route }) {
  const [selection, setSelection] = React.useState([]);

  return (

    <View>
      

    </View>
    
  );
}
/**SUBMIT SCREENS END ********************************************************* */
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
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

/***********************************************************************************
 * END APP container ***************************************************************
 ***********************************************************************************/
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#aaf',
    justifyContent: 'center',
    
  },
  row2: {
    flexDirection: 'row',
    backgroundColor: '#aff',
    justifyContent: 'center',
    
  },
  rowWhite: {
    flexDirection: 'row',
    backgroundColor: '#fff',
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

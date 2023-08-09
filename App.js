import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import { COLORS } from './assets/COLORS';


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
      route.params.post = route.params.post;
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
/************************************************************************/


/************************************************************************/


function HomeScreen2({navigation, route}) {
  
  
  React.useEffect(() => {
    
    if (route.params?.post) {
      route.params.post = route.params.post;
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
  React.useEffect(() => {
    if (route.params?.triple) {
      route.params.triple = route.params.triple;
    }
  }, [route.params?.triple]);

  const [selectionSet, setSelectionSet] = React.useState(['','','','','','','','']);
  const [triple, setTriple] = React.useState('');

  return (

  <View style = {styles.box}>
    <View >
      <View style={styles.row}>
        
        <Button
            title= {"PYO1 - " + JSON.stringify(selectionSet[0])}
            onPress={() => {
                selectionSet[0] = '0';
                setSelectionSet([...selectionSet])
            }}
        />
        <Button
            title= {"PYO2 - " + JSON.stringify(selectionSet[1])}
            onPress={() => {
                selectionSet[1] = '1';
                setSelectionSet([...selectionSet])
            }}
        />
      </View>

    </View>

    <View style={styles.rowWhite}>
      <Button
          title= {"Triple Play - " + JSON.stringify(selectionSet[7])}
          onPress={() => {
              selectionSet[7] = '3x';
              setSelectionSet([...selectionSet])
              navigation.navigate('Submission2',{
              } 
                
              )
            
          }}
      />
    </View>
  
      <View>
        <Text>{JSON.stringify(selectionSet)}</Text>
      </View>
  </View>
    
  );
}
function TriplePlayScreen({ navigation, route }) {
  
  return (
    
    <TouchableOpacity>
      <View style={styles.button69}>
        <Text style={styles.buttonText}>
          Press Me!
        </Text>

      </View>
    </TouchableOpacity>

    
    
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
           <Stack.Screen
            name= "Submission2"
            component= {TriplePlayScreen}
            options={{title: 'Submission2 for Week ' + WeekNumber}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

/***********************************************************************************
 * END APP container ***************************************************************
 ***********************************************************************************/
const buttonWidth = Dimensions.get('window').width * 0.39;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: COLORS.orange,
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
  box: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'space-between',
    padding: 25,
    margin: 20

  },
  button69: {
    backgroundColor: COLORS.gray,
    height: 40,
    padding: 5, 
    width: buttonWidth,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,

  }, 
  buttonText:{
    fontSize: 18, 
    color: 'white',
    textAlign: 'center',
    marginTop: 1,
  }
  
});


export default App;

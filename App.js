import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from './assets/COLORS';
import NFL_Logo from './assets/NFL_Logo.jpg';
import Glennon from './assets/Mike_Glennon.jpg';
import SubmissionButton from './src/components/SubmissionButton';

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
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );
}
/************************************************************************/


/************************************************************************/


function HomeScreen2({navigation, route}) {
  
  return (
    <View style={styles.box}>

      <View style={styles.row}>

        <View style={styles.imageBox}>

          <Image style = {styles.nflLogo} source={NFL_Logo}/>

        </View>
          
        <View style={styles.imageBox}>

          <Image source={Glennon} style={styles.profilePhoto} />

        </View>
            
      </View>

      <View >

        <View style ={styles.row2}>

          <TouchableOpacity>
            <View style={styles.buttonLittle}>
              <Text style={styles.buttonText}>Button</Text> 
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.buttonLittle}>
              <Text style={styles.buttonText}>Button</Text> 
            </View>
          </TouchableOpacity>

        </View>

        <View style ={styles.row3}>

          <TouchableOpacity>
            <View style={styles.buttonLittle}>
              <Text style={styles.buttonText}>Button</Text> 
            </View>
          </TouchableOpacity>

          <TouchableOpacity>

            <View style={styles.buttonLittle}>

              <Text style={styles.buttonText}>Button</Text> 

            </View>

          </TouchableOpacity>

        </View>


        <View style ={styles.row3}>

          <TouchableOpacity>

            <View style={styles.buttonRectangle}>

              <Text style={styles.buttonText}>Button</Text> 

            </View>

          </TouchableOpacity>

        </View>
        <View style ={styles.row3}>

          <TouchableOpacity>

            <View style={styles.buttonRectangle}>

              <Text style={styles.buttonText}>Button</Text> 

            </View>

          </TouchableOpacity>

        </View>

      </View>
      
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
              navigation.navigate('TriplePlay',{
              } 
                
              )
            
          }}
      />
      <SubmissionButton selNum={0} set={selectionSet}/>
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
      <View style={styles.buttonLittle}>
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
            name= "TriplePlay"
            component= {TriplePlayScreen}
            options={{title: 'Triple Play for Week ' + WeekNumber}}
          />
          <Stack.Screen
            name= "Home2"
            component= {HomeScreen2}
            options={{title: 'HomeScreenBuild'}}
          />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

/***********************************************************************************
 * END APP container ***************************************************************
 ***********************************************************************************/
const screenWindow = Dimensions.get('window');
const buttonWidth = screenWindow.width * 0.39;
const profilePhotoSpacerH = screenWindow.width * 0.02;
const profilePhotoSpacerV = screenWindow.height * 0.02;
const rowSpacerV = screenWindow.height * 0.005;
const buttonSizerH = screenWindow.width * 0.4;
const buttonSizerV = screenWindow.height * 0.1;
const buttonRSizerH = screenWindow.width * 0.85;
const buttonRSizerV = screenWindow.height * 0.1;
const textSizer = screenWindow.width * 0.06;
const imageSizer = screenWindow.width * 0.33;




const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
  },
  row3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: rowSpacerV
    
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
    flex:1,
    backgroundColor:COLORS.lightGray,
    padding: 25,

  },
  buttonLittle: {
    backgroundColor: COLORS.lightBlue,
    height: buttonSizerV, 
    width: buttonSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonRectangle: {
    backgroundColor: COLORS.lightBlue,
    height: buttonRSizerV, 
    width: buttonRSizerH,
    borderWidth: 1.5,
    borderColor: COLORS.orange,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText:{
    fontSize: textSizer,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
    textAlign: 'center',
    marginTop: 1,
  }, 
  profilePhoto:{
    width: imageSizer,
    height: imageSizer, 
    borderRadius: 400/ 2,
    borderColor: 'black',
    borderWidth: 3 
    
  },
  nflLogo:{
    width: imageSizer,
    height: imageSizer, 
    borderColor: 'black',
    borderWidth: 3 
  },
  imageBox:{
    paddingHorizontal: profilePhotoSpacerH,
    paddingVertical: profilePhotoSpacerV,
    justifyContent: 'space-evenly',
    

  }
  
});


export default App;

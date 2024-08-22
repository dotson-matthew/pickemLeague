import * as React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { COLORS } from "./assets/COLORS";
import NFL_Logo from "./assets/NFL_Logo.jpg";
import Glennon from "./assets/Mike_Glennon.jpg";
import SubmissionScreen from "./src/screens/SubmissionScreen";

import CreatePostScreen from "./src/screens/CreatePostScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HomeScreen2 from "./src/screens/HomeScreen2";
import DetailsScreen from "./src/screens/DetailsScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ConfirmationScreen from "./src/screens/ConfirmationScreen";

import StandingsScreen from "./src/screens/StandingsScreen";
import LogoTitle from "./src/components/LogoTitle";
import StyleSheet69 from "./src/components/StyleReference";
import PickBoardScreen from "./src/screens/PickBoardScreen";
const styles = StyleSheet69();

/*********************************************************************************
 * END IMPORT STATEMENTS *********************************************************
 * ******************************************************************************* */

/** Stack Navigation Creation */
const Stack = createNativeStackNavigator();
const now = new Date();
// const WeekNumber = 8;
// const primeTime = "2023-10-30T00:00:00.000Z";

const currentTime = now.toISOString();
var block = getWeekNumber(currentTime);
const WeekNumber = block.w
const primeTime = block.wp


function getWeekNumber(timeNow){
  //var primeTime = "2023-10-30T00:00:00.000Z";
  var y = timeNow;
  var w; var wp;
  var zero      = "2023-09-03T17:00:00.000Z"; var zeroPrime      = "2024-09-02T00:00:00.000Z";
  var one       = "2024-09-10T17:00:00.000Z"; var onePrime       = "2024-09-09T00:00:00.000Z";
  var two       = "2024-09-17T17:00:00.000Z"; var twoPrime       = "2024-09-16T00:00:00.000Z";
  var three     = "2024-09-24T17:00:00.000Z"; var threePrime     = "2024-09-23T00:00:00.000Z";
  var four      = "2024-10-01T17:00:00.000Z"; var fourPrime      = "2024-09-30T00:00:00.000Z";
  var five      = "2024-10-08T17:00:00.000Z"; var fivePrime      = "2024-10-07T00:00:00.000Z";
  var six       = "2024-10-15T17:00:00.000Z"; var sixPrime       = "2024-10-14T00:00:00.000Z";
  var seven     = "2024-10-22T17:00:00.000Z"; var sevenPrime     = "2024-10-21T00:00:00.000Z";
  var eight     = "2024-10-29T17:00:00.000Z"; var eightPrime     = "2024-10-28T00:00:00.000Z";
  var nine      = "2024-11-05T17:00:00.000Z"; var ninePrime      = "2024-11-04T00:00:00.000Z";
  var ten       = "2024-11-12T17:00:00.000Z"; var tenPrime       = "2024-11-11T00:00:00.000Z";
  var eleven    = "2024-11-19T17:00:00.000Z"; var elevenPrime    = "2024-11-18T00:00:00.000Z";
  var twelve    = "2024-11-26T17:00:00.000Z"; var twelvePrime    = "2024-11-25T00:00:00.000Z";
  var thirteen  = "2024-12-03T17:00:00.000Z"; var thirteenPrime  = "2024-12-02T00:00:00.000Z";
  var fourteen  = "2024-12-10T17:00:00.000Z"; var fourteenPrime  = "2024-12-09T00:00:00.000Z";
  var fifteen   = "2024-12-17T17:00:00.000Z"; var fifteenPrime   = "2024-12-16T00:00:00.000Z";
  var sixteen   = "2024-12-24T17:00:00.000Z"; var sixteenPrime   = "2024-12-23T00:00:00.000Z";
  var seventeen = "2024-12-31T17:00:00.000Z"; var seventeenPrime = "2024-12-30T00:00:00.000Z";
  var eighteen  = "2025-01-07T17:00:00.000Z"; var eighteenPrime  = "2025-01-06T00:00:00.000Z";
  var nineteen  = "2025-01-14T17:00:00.000Z"; var nineteenPrime  = "2025-01-13T00:00:00.000Z";
  if (y< zero){
    w = 0;
    wp = zeroPrime;
  }
  else if (y< one){
    w = 1;
    wp = onePrime;
  }
  else if (y< two){
    w = 2;
    wp = twoPrime;
  }
  else if (y< three){
    w = 3;
    wp = threePrime;
  }
  else if (y< four){
    w = 4;
    wp = fourPrime;
  }
  else if (y< five){
    w = 5;
    wp = fivePrime;
  }
  else if (y< six){
    w = 6;
    wp = sixPrime;
  }
  else if (y< seven){
    w = 7;
    wp = sevenPrime;
  }
  else if (y< eight){
    w = 8;
    wp = eightPrime;
  }
  else if (y< nine){
    w = 9;
    wp = ninePrime;
  }
  else if (y< ten){
    w = 10;
    wp = tenPrime;
  }
  else if (y< eleven){
    w = 11;
    wp = elevenPrime;
  }
  
  else if (y< twelve){
    w = 12;
    wp = twelvePrime;
  }
  else if (y< thirteen){
    w = 13;
    wp = thirteenPrime;
  }
  else if (y< fourteen){
    w = 14;
    wp = fourteenPrime;
  }
  else if (y< fifteen){
    w = 15;
    wp = fifteenPrime;
  }
  else if (y< sixteen){
    w = 16;
    wp = sixteenPrime;
  }
  else if (y< seventeen){
    w = 17;
    wp = seventeenPrime;
  }
  else if (y< eighteen){
    w = 18;
    wp = eighteenPrime;
  }
  else if (y< nineteen){
    w = 'SeasonOver';
    wp = nineteenPrime;
  }
  return {w,wp}
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home2"
          component={HomeScreen2}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ price: "$69.69" }}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{ title: "Post Screen" }}
        />
        <Stack.Screen
          name="Submission"
          component={SubmissionScreen}
          options={{ title: "Submission for Week " + WeekNumber }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
          }}
          initialParams={{weekNo:WeekNumber, pT:primeTime}}
        />
        <Stack.Screen
        name="Board"
        component={PickBoardScreen}
        options={{
          title: "Board",
        }}
      />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login Page" }}
        />
        <Stack.Screen
          name="Confirm"
          component={ConfirmationScreen}
          options={{ title: "Confirm Pick Set" }}
        />

        <Stack.Screen
          name="Standings"
          component={StandingsScreen}
          options={{ title: "Standings" }}
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

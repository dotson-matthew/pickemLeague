import * as React from "react";
import { StackActions, NavigationContainer } from "@react-navigation/native";
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
import { COLORS } from "../../assets/COLORS";
import NFL_Logo from "../../assets/NFL_Logo.jpg";
import Glennon from "../../assets/Mike_Glennon.jpg";
import StyleSheet69 from "../components/StyleReference";
const styles = StyleSheet69();

function HomeScreen({ navigation, route }) {
  
  const {username} = route.params;
  var weekNumber = 1;
  return (
    <View style={styles.box}>
      <View style={styles.row}>
        <View style={styles.imageBox}>
          <Image style={styles.nflLogo} source={NFL_Logo} />
        </View>
      {
      //   <View style={styles.imageBox}>
      //   <Image source={Glennon} style={styles.profilePhoto} />
      // </View>
      }
        
      </View>
      
      <View style={styles.row2}>
          
            
        <Text style={styles.buttonText}>Welcome {username}</Text>
            
          
      </View>
      <View>
    {//*
    //
    // <View style={styles.row2}>
    //   <TouchableOpacity onPress={() => navigation.push("Standings")}>
    //     <View style={styles.buttonRectangle}>
    //       <Text style={styles.buttonText}>Standings</Text>
    //     </View>
    //   </TouchableOpacity>
    // </View>
  //   <View style={styles.row3}>
  //   <TouchableOpacity onPress={() => navigation.push("Board")}>
  //     <View style={styles.buttonRectangle}>
  //       <Text style={styles.buttonText}>Pick Board</Text>
  //     </View>
  //   </TouchableOpacity>
  // </View>
    }
      

       

        <View style={styles.row3}>
          <TouchableOpacity
            onPress={() =>
              navigation.push("Submission", { username: username })
            }
          >
            <View style={styles.buttonRectangle}>
              <Text style={styles.buttonText}>
                Week {weekNumber} Submission
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.row3}>
          <TouchableOpacity
            onPress={() =>
              navigation.dispatch(StackActions.replace("Login", { params: {} }))
            }
          >
            <View style={styles.buttonRectangleCancel}>
              <Text style={styles.buttonText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default HomeScreen;

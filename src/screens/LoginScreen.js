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
import axios from "axios";

const styles = StyleSheet69();

function LoginScreen({ navigation, route }) {
  const [username, setUsername] = React.useState("Username Here");
  const [password, setPassword] = React.useState("Password Here");
  
  const baseUrl = "https://nflpickemapi.azurewebsites.net";

  const handleLogin = async () => {
    const credentials = {
      username: username,
      password: password,
    };

    try {
      const response = axios.post(
        "https://nflpickemapi.azurewebsites.net/Validate",
        credentials,
        {
          "Content-Type": "application/json",
        }
      );

      console.log((await response).headers);
      console.log((await response).data);
      console.log((await response).status);

      if ((await response).status == 200) {
        navigation.dispatch(
          StackActions.replace("Home", { username: username })
        );
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <View style={styles.box}>
      <View className="Login">
        <Text style={styles.buttonText}>Login Page</Text>
        <View style={styles.rowLogin}>
          <View style={styles.categoryBoxRectangle}>
            <Text style={styles.loginTextPrompt}>Enter Username Below: </Text>
          </View>
        </View>
        <View style={styles.rowLogin}>
          <View style={styles.categoryBoxRectangle}>
            <TextInput
              style={styles.loginTextInput}
              type="text"
              placeholder = {username}
              onChangeText={setUsername}
              autoCapitalize = 'none'
            />
          </View>
        </View>
        <View>
          <View style={styles.rowLogin}>
            <View style={styles.categoryBoxRectangle}>
              <Text style={styles.loginTextPrompt}>Enter Password Below: </Text>
            </View>
          </View>
          <View style={styles.rowLogin}>   
            <View style={styles.categoryBoxRectangle}>
              <TextInput
                style={styles.loginTextInput}
                type="text"
                onChangeText={setPassword}
                placeholder = {password}
                autoCapitalize = 'none'
              />
            </View>
          </View>
        </View>
        <TouchableOpacity  onPress={handleLogin}>
          <View style={styles.rowLogin}>
            <View style={styles.buttonRectangle}>
              <Text style={styles.loginTextPrompt}>LOGIN</Text>
            </View>
          </View>
            
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginScreen;

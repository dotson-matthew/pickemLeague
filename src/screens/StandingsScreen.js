import React from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import StyleSheet69 from "../components/StyleReference";
const styles = StyleSheet69();
import data from "../dataset/JSON.json";

const StandingsScreen = () => {
    React.useEffect(() => {
    // useEffect hook

    setIsLoading(true);
    setTimeout(() => {
    //   var url =
    //     "https://nflpickemapi.azurewebsites.net/GetUserSubmissions?username=";
    //   // simulate a delay
    //   axios.get(url).then((response) => {
    //     console.log("Made second API call");
    //     //setGameData(response.data);
    //     console.log("Here is API response");
    //     console.log(response.data);
    //     setDatabaseSet(response.data);

    //     setIsLoading(false); //set loading state
     // );
    }, 2000);
  }, []);

  return (
    {}
  );
};

export default StandingsScreen;

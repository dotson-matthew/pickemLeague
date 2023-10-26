import React from "react";
import axios from "axios";
import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import StyleSheet69 from "../components/StyleReference";
const styles = StyleSheet69();
import data from "../dataset/JSON.json";

const StandingsScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [standingData, setStandingData] = React.useState([]);
  const [standingDataList, setStandingDataList] = React.useState([]);

  React.useEffect(() => {
    // useEffect hook

    setIsLoading(true);
    setTimeout(() => { 
      // simulate a delay
      axios
        .get("https://nflpickemapi.azurewebsites.net/GetLeaderBoardModels")
        .then((response) => {
          console.log("Made API call");
          setStandingData(response.data);
          setIsLoading(false)
        });
        
    }, 2000);
    
  }, []);
  if (isLoading) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Loading the data</Text>
        {console.log("loading state")}
      </View>
    );
  }
  var standingsList = [
    {
      id: "11",
      name: "Tristen Dotson",
      wins: 15,
      losses: 5,
    },
    {
      id: "10",
      name: "Michael Sheveland",
      wins: 13,
      losses: 7,
    },
    {
      id: "16",
      name: "Ally Mundie",
      wins: 13,
      losses: 7,
    },
    {
      id: "02",
      name: "Matthew Dotson",
      wins: 13,
      losses: 7,
    },
    {
      id: "03",
      name: "Da Coin",
      wins: 13,
      losses: 7,
    },
    {
      id: "07",
      name: "Greg Harisis",
      wins: 12,
      losses: 8,
    },
    {
      id: "14",
      name: "Zander Thompson",
      wins: 12,
      losses: 8,
    },
    {
      id: "15",
      name: "Brigid Jacobson",
      wins: 11,
      losses: 9,
    },
    {
      id: "08",
      name: "Joey Arriaga",
      wins: 11,
      losses: 9,
    },
    {
      id: "06",
      name: "Evan Adrian",
      wins: 11,
      losses: 9,
    },
    {
      id: "01",
      name: "Joey Jacobson",
      wins: 10,
      losses: 10,
    },
    {
      id: "04",
      name: "Clayton Turner",
      wins: 10,
      losses: 10,
    },
    {
      id: "05",
      name: "Colton Nash",
      wins: 7,
      losses: 13,
    },
  ];
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  console.log(standingData)
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={standingData}
        renderItem={({ item }) => (
          <Item
            title={
              item.name +
              "\n" +
              "Record:\t"+
              item.wins +" - " + item.losses + "\n" +
              "Win % :\t"+item.winPCT + "\n" +
              "Triple % :\t"+item.triplePCT+"\n"+
              "Pick % :\t"+item.pickPCT+"\n"
            }
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default StandingsScreen;

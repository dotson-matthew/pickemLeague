import React from "react";

import { SafeAreaView, View, Text, StyleSheet, FlatList } from "react-native";
import StyleSheet69 from "../components/StyleReference";
const styles = StyleSheet69();
import data from "../dataset/JSON.json";

const StandingsScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
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
  return (
    <SafeAreaView style={styles.container}>
          <FlatList
            data={standingsList}
            renderItem={({ item }) => <Item title={item.name + "\n" + item.wins + " - " + item.losses + "\n" + item.id} />}
            keyExtractor={(item) => item.id}
            
          />
          
    </SafeAreaView>
  );
};

export default StandingsScreen;

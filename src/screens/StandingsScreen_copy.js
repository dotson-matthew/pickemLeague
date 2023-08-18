import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();
import data from '../dataset/JSON.json';

const StandingsScreen2 = () => {
    let myJSON = {
        "Boss" : "John",
        "Department" : "Finance",
        "Department id": 3,
        "employees":[
            {
                "name":"Shaun",
                "age": 30
            },
            {
                "name":"Paul",
                "age" : 27
            }
        ]
    };
     
    console.log(data.Accounts[1].Player.selectionCatalog.week1.PYO1.team);    
    console.log(myJSON["employees"][1]["name"]);

    return (

    
        <View style = {styles.row}>
            

            
        </View>

        
           
    );
};




export default StandingsScreen2;
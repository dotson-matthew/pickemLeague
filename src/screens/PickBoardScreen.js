import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();
import data from '../dataset/JSON.json';

const PickBoardScreen = () => {
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
    var arr = [];
    console.log(data.Accounts[1].Player.selectionCatalog.week1.PYO1.team);    
    for (var i=0; i<data.Accounts.length;i++){
        var firstName=  data.Accounts[i].Player.firstName
        var lastName=   data.Accounts[i].Player.lastName
        var wins=       data.Accounts[i].Player.wins
        var losses=     data.Accounts[i].Player.losses
        var pct=        wins/(wins+losses)
        var name = (firstName+" "+lastName)
        var record = (wins + "\t-\t" + losses)
        arr.push({name,wins,losses,pct, record})
    }
    
    return (

        <>
        <View style = {styles.rowS}>
            <View style = {styles.categoryBoxBigger}>
                <Text style={styles.boxText2}>NAME</Text>
            </View>
            <View style = {styles.categoryBoxBigger}>
                <Text style={styles.boxText2}>RECORD</Text>
            </View>


        </View>

        <FlatList


            keyExtractor={(arr) => arr.name}
            data={arr.sort((firstItem, secondItem) =>   secondItem.pct - firstItem.pct)}

            renderItem={({ item }) => {
                return (
                <View style = {styles.rowS}>
                    <View style = {styles.categoryBox2}>
                        <Text style={styles.boxText2}>{item.name}</Text>
                    </View>
                    <View style = {styles.categoryBox2}>
                        <Text style={styles.boxText2}>{item.record}</Text>
                    </View>


                </View>);
            } } />
            </>
        

        
           
    );
};




export default PickBoardScreen;
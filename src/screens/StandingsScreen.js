import React from 'react';

import { View, Text, StyleSheet, FlatList } from 'react-native';
import StyleSheet69 from '../components/StyleReference';
const styles = StyleSheet69();

const StandingsScreen = () => {
    const friends = [
        { name: 'Matthew Dotson', wins:JSON.stringify(75)},
        { name: 'Ally Mundie', wins:JSON.stringify(68)},
        { name: 'Joey Jacobson', wins:JSON.stringify(55)},
        { name: 'Joey Arriaga', wins:JSON.stringify(54)},
        { name: 'Evan Adrian', wins:JSON.stringify(45)},
        { name: 'Mike Sheveland', wins:JSON.stringify(45)},
        { name: 'Colton Nash', wins:JSON.stringify(81)},
        { name: 'Evan Judd', wins:JSON.stringify(68)},
    ];


    return (

        <>
        <View style = {styles.row}>
            <View style = {styles.categoryBox}>
                <Text style={styles.boxText2}>NAME</Text>
            </View>
            <View style = {styles.categoryBox}>
                <Text style={styles.boxText2}>WINS</Text>
            </View>

            
        </View>

        <FlatList


            keyExtractor={(friend) => friend.name}
            data={friends.sort((a,b) => b.wins.localeCompare(a.wins))}

            renderItem={({ item }) => {
                return (
                <View style = {styles.row}>
                    <View style = {styles.categoryBox}>
                        <Text style={styles.boxText2}>{item.name}</Text>
                    </View>
                    <View style = {styles.categoryBox}>
                        <Text style={styles.boxText2}>{item.wins}</Text>
                    </View>

                    
                </View>);
            } } />
            </>
    );
};




export default StandingsScreen;
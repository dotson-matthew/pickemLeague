import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import { COLORS } from '~/assets/COLORS';
import NFL_Logo from '~/assets/NFL_Logo.jpg';
import Glennon from '/~/assets/Mike_Glennon.jpg';
import SubmissionButton from '~/src/components/SubmissionButton';

function SubmissionScreen({set, selNum }) {
    const [selection, setSelection] = React.useState('');
    const [set2, setSet2]= React.useState(set[selNum]);


    return (
        <View>
            <Button
                title= {"PYO" + JSON.stringify(selNum) + " - " + JSON.stringify(set[selNum])}
                onPress={() => {
                    setSelection('Chiefs');
                    set[selNum]=selection;
                }}/>
            <Text>
                {selection}
            </Text>
        </View>
        
    );
}

export default SubmissionScreen;
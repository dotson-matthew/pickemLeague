import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

const SubmissionButton = ({set, selNum, sel }) => {
    const [selection, setSelection] = React.useState(sel);
    const [set2, setSet2]= React.useState(set);


    return (
        <View>
            <Button
                title= {"PYO" + JSON.stringify(selNum) + " - " + JSON.stringify(set2[selNum])}
                onPress={() => {
                    setSelection('Chiefs');
                    set[selNum]= selection;
                    setSet2(set);
                }}/>
            <Text>
                {selection}
            </Text>
        </View>
        
    )
}

export default SubmissionButton;
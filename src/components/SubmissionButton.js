import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

const SubmissionButton = ({selectionSet, selNum }) => {
    const [selection, setSelection] = React.useState('');


    return (
        <View>
            <Button
                title= {"PYO" + JSON.stringify(selNum) + " - " + JSON.stringify(selectionSet[0])}
                onPress={() => {
                    setSelection('Chiefs')
                }}/>
            <Text>
                {selection}
            </Text>
        </View>
        
    )
}

export default SubmissionButton;
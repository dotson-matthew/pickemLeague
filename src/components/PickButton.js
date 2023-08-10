import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

const PickButton = ({set, selNum }) => {
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
        
    )
}

export default PickButton;
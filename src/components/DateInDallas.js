import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';

const timezone = "America/Chicago";
const now = new Date();
const currentTime = new Intl.DateTimeFormat('en-US', {timeZone:timezone, timeStyle: 'medium', hour12: false}).format(now);
//console.log("The current time in " + timezone + " is " + currentTime);
function DateInDallas(){
    //console.log("The current time in " + timezone + " is " + currentTime);
    return (currentTime)
}

export default DateInDallas;
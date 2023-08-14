import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';

function LogoTitle(){
    
    return (
        <View>
            <Image
            style={{width:50, height:50}}
            source={require('../../assets/NFL_Logo.jpg')}
            />
        
        </View>
        
    );
}

export default LogoTitle;
import * as React from 'react';
import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {Button} from 'react-native-paper';

export default function TabTwoScreen({navigation}) {
  
  const register = () => {
      console.log('register')
      navigation.navigate("Root")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <Button 
        icon="account-edit"
        mode="contained"
        onPress={()=>register()} 
        > Register</Button>
        <Text style={{color: 'blue'}}
            onPress={() => navigation.navigate("Login")}>
            Already have an account? Login 
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

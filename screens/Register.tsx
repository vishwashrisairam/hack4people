import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,ScrollView,View,Text } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';

export default function TabTwoScreen({ navigation }) {
  const [valueEmail, onChangeText] = React.useState('Enter email');
  const [valueName] = React.useState('Enter full name');
  const [valuePassword] = React.useState('Enter password');
  const [valueReEnterPassword] = React.useState('Re-Enter password');
  const [valuePhone] = React.useState('Enter phone number');
  const register = () => {
    console.log('register')
    navigation.navigate("Root")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        onChangeText={text => onChangeText(text)}
        placeholder={valueName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        // onChangeText={text => onChangeText(text)}
        placeholder={valuePhone}
        textContentType={"telephoneNumber"}
        keyboardType={"phone-pad"}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        // onChangeText={text => onChangeText(text)}
        placeholder={valueEmail}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        // onChangeText={text => onChangeText(text)}
        placeholder={valuePassword}
        textContentType={"password"}
        secureTextEntry={true}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        // onChangeText={text => onChangeText(text)}
        placeholder={valueReEnterPassword}
        textContentType={"password"}
        secureTextEntry={true}
      />
      <Button
        style={{ margin: 20 }}
        icon="account-edit"
        mode="contained"
        onPress={() => register()}
      > Register</Button>
      <Text style={{ color: 'blue',textAlign:"center" }}
        onPress={() => navigation.navigate("Login")}>
        Already have an account? Login
        </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet,ScrollView,View,Text } from 'react-native';
import { TextInput } from 'react-native-paper';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';

export default function Login({ navigation }) {
  const [valueEmail, onChangeText] = React.useState('Email');
  const [valuePassword] = React.useState('Password');
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state: any) => state)

  const authenticate = () => {
    console.log('authenticated')
    dispatch({ type: 'LOGIN' })
    // navigation.navigate("Root")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        onChangeText={text => onChangeText(text)}
        placeholder={valueEmail}
        textContentType={"username"}
        keyboardType={"email-address"}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 20 }}
        // onChangeText={text => onChangeText(text)}
        placeholder={valuePassword}
        textContentType={"password"}
        keyboardType={"visible-password"}
        secureTextEntry={true}
      />
      <Button
        style={{ margin: 20 }}
        icon="account-edit"
        mode="contained"
        onPress={() => authenticate()}
      > Login</Button>
      <Text style={{ color: 'blue',textAlign: 'center' }}
        onPress={() => navigation.navigate("Register")}>
        Click here to Register !!!
    </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

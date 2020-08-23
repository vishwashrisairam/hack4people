import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet,ScrollView,View,Text,Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios';
// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state: any) => state)

  const authenticate = () => {
    console.log('authenticated')
    let reqObj = {
      Email : email,
      Password : password
    }
  
    dispatch({type:"SET_LOADING",payload:true})

    axios.post('https://hackcloudfinal.uc.r.appspot.com/authenticate',reqObj)
      .then(res => {
        dispatch({type:"SET_LOADING",payload:true})
        dispatch({type:"LOGIN"})
        dispatch({type:"SET_USER_DETAILS",payload:res.data.data.user[0]})
        
      })
      .catch(err=> {
        console.log(err)
        dispatch({type:"SET_LOADING",payload:true})
        Alert.alert('Something went wrong', 'Please try again', [
          { text: 'Ok', onPress: () => console.log(123) }
        ]);
      })
      dispatch({type:"LOGIN"})
    // navigation.navigate("Root")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={{  borderColor: 'gray', borderWidth: 1, margin: 20 }}
        onChangeText={text => setEmail(text)}
        value={email}
        label="Email"
        textContentType={"username"}
        keyboardType={"email-address"}
      />
      <TextInput
        style={{  borderColor: 'gray', borderWidth: 1, margin: 20 }}
        onChangeText={text => setPassword(text)}
        value={password}
        label="Password"
        textContentType={"password"}
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

import  React,{useState} from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,ScrollView,Text,KeyboardAvoidingView,View, Platform,Alert } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';
import Spinner from 'react-native-loading-spinner-overlay';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';

export default function TabTwoScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const dispatch = useDispatch()
  const {loading,store}=useSelector(state=> state) 

  const [enableshift,setenableShift] = useState(false)

  const register = () => {
    if(password===confirmPass){
      let reqObj = {
        Firstname : firstName,
        Lastname  : lastName,
        Phone : phone,
        Points : 0, 
        DOB  : "1992-01-20",
        Email : email,
        Password : password
    }
    
      dispatch({type:"SET_LOADING",payload:true})
      console.log('register req',reqObj)

      axios.post('https://hackcloudfinal.uc.r.appspot.com/register',reqObj)
        .then(res => {
          console.log(res.data.data.user[0])
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
      
    }else{
      Alert.alert('Form Error', 'Passwords did not match', [
        { text: 'Ok', onPress: () => console.log(123) }
      ]);
    }

  }

  return (
   
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'position' : null}
      style={{flex:1}} 
      enabled={enableshift}
      >
      <ScrollView>
      <Text style={styles.title}>Register</Text>
      <Spinner
          visible={loading}
          textContent={'Loading...'}
        />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setFirstName(text)}
        label= "First Name"
        value={firstName}
        onFocus={()=>setenableShift(true)}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setLastName(text)}
        label= "Last Name"
        value={lastName}
        onFocus={()=>setenableShift(true)}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setPhone(text)}
        label="Phone Number"
        value={phone}
        textContentType={"telephoneNumber"}
        keyboardType={"phone-pad"}
        onFocus={()=>setenableShift(true)}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setEmail(text)}
        label="Email"
        value={email}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
        onFocus={()=>setenableShift(true)}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setPassword(text)}
        label="Password"
        value={password}
        textContentType={"password"}
        secureTextEntry={true}
        onFocus={()=>setenableShift(true)}
      />
      <TextInput
        style={styles.inputField}
        onChangeText={text => setConfirmPass(text)}
        label="Confirm Password"
        value={confirmPass}
        textContentType={"password"}
        secureTextEntry={true}
        onFocus={()=>setenableShift(true)}
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
      <View style={{ flex : 1 }} />
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
  inputField:{
    borderColor: 'gray', 
    borderWidth: 1, 
    margin: 20 
  } 
});

import  React,{useState} from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet,ScrollView,Text,KeyboardAvoidingView, Platform } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';
import { Button } from 'react-native-paper';

export default function TabTwoScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');


  const [enableshift,setenableShift] = useState(false)

  const register = () => {
    console.log('register')
    navigation.navigate("Root")
  }

  return (
   
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'position' : null}
      style={{flex:1}} 
      enabled={enableshift}
      keyboardVerticalOffset={200}
      >
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>
      
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

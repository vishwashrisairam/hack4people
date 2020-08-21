import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { StyleSheet } from 'react-native';


// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import {Button} from 'react-native-paper';

export default function Login({navigation}) {

  const dispatch = useDispatch()
  const {isAuth}=useSelector(state=> state) 

  const authenticate = () =>{
    console.log('authenticated')
    dispatch({type:'LOGIN'})
    // navigation.navigate("Root")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      {/**navigation.navigate("Register") */}  
      <Button 
        icon="account-edit"
        mode="contained"
        onPress={()=>authenticate()} 
    > Login</Button>
    <Text style={{color: 'blue'}}
        onPress={() => navigation.navigate("Register")}>
        Click here to Register !!!
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

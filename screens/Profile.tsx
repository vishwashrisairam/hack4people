import * as React from 'react';
import { StyleSheet } from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector,useDispatch} from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const dispatch = useDispatch()
  const {isAuth}=useSelector(state=> state)

  const logout = ()=>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button 
        icon="account-edit"
        mode="contained"
        onPress={()=>logout()} 
    > Logout</Button>
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

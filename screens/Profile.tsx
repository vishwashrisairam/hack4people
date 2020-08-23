import * as React from 'react';
import { StyleSheet,ScrollView,View,Text } from 'react-native';
import { Button, Avatar, TextInput, IconButton, Colors,Card } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import {Entypo} from '@expo/vector-icons';


export default function TabTwoScreen({ navigation }) {

  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state);
  const [valueUsername] = React.useState('Simba');
  const [valuePhone] = React.useState('000-000-0000');

  const logout = () => {
    dispatch({ type: "LOGOUT" })
  }

  const editpage = () => {
    console.log('edit profile');
    dispatch({ type: 'EDIT' });
    // navigation.navigate("Root")
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.flexcontainer}>
        <Text style={styles.title}>Profile</Text>
        <IconButton
          icon="account-edit"
          color={Colors.blue400}
          size={25}
          onPress={() => navigation.navigate("EditProfile")}
        />
      </View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <View style={{flex:1,alignItems:"center"}}> 
        <Avatar.Image size={100} source={require('../assets/images/default-user.jpg')} style={{ margin: 10,justifyContent:"center" }} />
        <Text style={styles.subtitle}>lionking@gmail.com</Text>
      </View>

      <Card 
          style={styles.myCard}
      >
          <View style={styles.cardContent}>
              <Entypo 
                  name="users" 
                  size={20} 
                  color="#006aff"
              />
              <Text style={styles.myText}>Simba</Text>
          </View>
      </Card>
      <Card 
          style={styles.myCard}
      >
          <View style={styles.cardContent}>
              <Entypo 
                  name="email" 
                  size={25} 
                  color="#006aff"
              />
              <Text style={styles.myText}>abc@xyz.com</Text>
          </View>
      </Card>

      <Card 
          style={styles.myCard}
      >
          <View style={styles.cardContent}>
              <Entypo 
                  name="phone" 
                  size={25} 
                  color="#006aff"
              />
              <Text style={styles.myText}>12321</Text>
          </View>
      </Card>
      <Button
        icon="account-edit"
        mode="contained"
        onPress={() => logout()}
        style={{margin:20}}
      > Logout</Button>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    flex:1,
    textAlign:"center",
    justifyContent:"center",
    margin: 10
  },
  subheading: {
    flex:1,
    justifyContent:"center",
    fontSize: 16,
    margin: 10
  },
  flexcontainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent:"center",
    margin: 20
  },
  myCard:{
    margin:20,
  },
  cardContent:{
      flexDirection:"row"
  },
  myText:{
      fontSize:18,
      marginTop:5,
      marginLeft:5,
      padding:8
  }
});

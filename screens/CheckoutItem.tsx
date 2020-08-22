import React,{useState} from 'react';
import { StyleSheet,View,Text,ScrollView,Modal, TouchableHighlight } from 'react-native';
import {  Button, Card, Title,TextInput} from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
// import Spinner from 'react-native-loading-spinner-overlay';

export default function CheckoutItem({navigation,route}) {

  const dispatch = useDispatch()
  const {loading,store}=useSelector(state=> state) 
  const userPoints = 1000;

  const {itemName,itemId,description,imageUrl,points} = route.params;
  
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address1,setAddress1] = useState("");
  const [address2,setAddress2] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [zip,setZip] = useState("");
  const [modalVisible , setModalVisible] = useState(false);

 console.log('loading',loading)
  const placeOrder = () => {
    console.log('placing order')
    dispatch({type:"SET_LOADING",payload:true})
    console.log(loading)

  }

  return (
    <ScrollView style={styles.container}>
       {/* <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal> */}
       <Card style={styles.cardItem}>
        <Card.Cover source={{ uri: imageUrl }} style={{height:400}} />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Card.Content>
          <Title>{itemName}</Title>
          <Text>{description}</Text>
        </Card.Content>
        
        <Card.Actions>
          <Button 
            icon="star" 
            mode="contained" 
            compact={true} 
            color="gold" 
          >
            {points}
          </Button>
        </Card.Actions>
        </View>
      </Card>
       
      
      <Card style={styles.cardItem}>
        <Card.Title
            title="Enter shipping details" 
        />
        <Card.Content>
        <View>
            <TextInput
                label="Name"
                value={name}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
                maxLength={30}
                onChangeText={text=>setName(text)}
            />
            <TextInput
                label="Email"
                value={email}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
                maxLength={40}
                onChangeText={text=>setEmail(text)}
            />

            <TextInput
                label="Phone"
                value={phone}
                style={styles.inputStyle}
                keyboardType="number-pad"
                theme={theme}
                maxLength={10}
                mode="outlined"
                onChangeText={text=>setPhone(text)}
            />
            <TextInput
                label="Address 1"
                value={address1}
                style={styles.inputStyle}
                theme={theme}
                maxLength={50}
                mode="outlined"
                onChangeText={text=>setAddress1(text)}
            />
            <TextInput
                label="Address 2"
                value={address2}
                style={styles.inputStyle}
                maxLength={30}
                theme={theme}
                mode="outlined"
                onChangeText={text=>setAddress2(text)}
            />
            <TextInput
                label="City"
                value={city}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
                maxLength={20}
                onChangeText={text=>setCity(text)}
            />
            <TextInput
                label="State"
                value={state}
                style={styles.inputStyle}
                theme={theme}
                mode="outlined"
                maxLength={20}
                onChangeText={text=>setState(text)}
            />
            <TextInput
                label="Zip Code"
                value={zip}
                style={styles.inputStyle}
                keyboardType="number-pad"
                theme={theme}
                mode="outlined"
                maxLength={50}
                onChangeText={text=>setZip(text)}
            />
            <Button  
                icon="cart-remove"
                mode="contained" 
                color="gold" 
                style={{alignSelf:'stretch'}}
                onPress= {()=>placeOrder()}
            >
            Checkout
            </Button>
            </View>
        </Card.Content>
        
      </Card>
    </ScrollView>
  );
}

const theme= {
    colors:{
        primary:"#006aff"
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  cardHeaderContent:{
    backgroundColor:'grey',
    fontSize: 20, 
    fontWeight:'bold'

  },
  cardItem:{
    margin:10,
    padding:10
  },
  inputStyle:{
    margin:5
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

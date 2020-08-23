import React, { useEffect } from 'react';
import { StyleSheet,View,Text,FlatList,Alert } from 'react-native';
import {  Button, Card, Title } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { compose } from 'redux';
import Spinner from 'react-native-loading-spinner-overlay';

export default function Redeem({navigation}) {

  const dispatch = useDispatch()
  const {loading,store,user}=useSelector(state=> state) 

  useEffect(()=>{
    fetchData();
  },[])

  const {Points} = user;

  const storeItemsList = x => {
    return (
      <Card style={styles.cardItem} key={x.id}>
        <Card.Cover source={{ uri: x.imageurl }} />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Card.Content>
          <Title>{x.name.length <=20 ? x.name : x.name.substring(0,20)+'...'}</Title>
        </Card.Content>
        
        <Card.Actions>
          <Button 
            icon="star" 
            mode="contained" 
            compact={true} 
            color="gold" 
            disabled={x.points_to_redeem>Points}
            onPress = { ()=> navigation.navigate("CheckoutItem",x)}
          >
            {x.points_to_redeem}
          </Button>
        </Card.Actions>
        </View>
      </Card>
    ) 
  }

  const fetchData = () => {
    console.log('fetching data')
    dispatch({type:"SET_LOADING",payload:true});
    axios.get('https://hackcloudfinal.uc.r.appspot.com/store')
      .then(res => {
        dispatch({type:"SET_LOADING",payload:false});
        dispatch({type:"SET_STORE",payload:res.data.data.store})
      }).catch(err => {
        console.log(err)
        Alert.alert('Something went wrong', 'Please try again', [
          { text: 'Ok', onPress: () => console.log(123) }
        ]);
      })
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content style={styles.cardHeaderContent}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>Points earned so far:  </Text>
              <Button icon="star" mode="contained" compact={true} color="gold" >
                {Points}
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>
      <Spinner
          visible={loading}
          textContent={'Loading...'}
        />
      <FlatList
            data={store}
            renderItem={({item})=>storeItemsList(item)}
            keyExtractor={item=>item.id}
            refreshing={loading}
            onRefresh={()=>fetchData()}
        />
    </View>
  );
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
    margin:20,
    padding:10
  }
});

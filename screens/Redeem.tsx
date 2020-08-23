import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';
import {  Button, Card, Title } from 'react-native-paper';
import {useDispatch,useSelector} from 'react-redux';

export default function Redeem({navigation}) {

  const dispatch = useDispatch()
  const {loading,store}=useSelector(state=> state) 
  const userPoints = 1000;

  const storeItemsList = x => {
    return (
      <Card style={styles.cardItem} key={x.itemId}>
        <Card.Cover source={{ uri: x.imageUrl }} />
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Card.Content>
          <Title>{x.itemName.length <=20 ? x.itemName : x.itemName.substring(0,20)+'...'}</Title>
        </Card.Content>
        
        <Card.Actions>
          <Button 
            icon="star" 
            mode="contained" 
            compact={true} 
            color="gold" 
            disabled={x.points>userPoints}
            onPress = { ()=> navigation.navigate("CheckoutItem",x)}
          >
            {x.points}
          </Button>
        </Card.Actions>
        </View>
      </Card>
    ) 
  }

  const fetchData = () => {
    console.log('fetching data')
  }

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content style={styles.cardHeaderContent}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white'}}>Points earned so far:  </Text>
              <Button icon="star" mode="contained" compact={true} color="gold" >
                {userPoints}
              </Button>
            </View>
          </View>
        </Card.Content>
      </Card>

      <FlatList
            data={store}
            renderItem={({item})=>storeItemsList(item)}
            keyExtractor={item=>item.itemId}
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

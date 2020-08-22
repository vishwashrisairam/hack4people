import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

// import { Text, View } from '../components/Themed';
import { FAB, Colors } from 'react-native-paper';

export default function Scan({navigation}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [scanned,setScanned] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setShowCamera(false);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(data)
    navigation.navigate("ScanResult")
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const { height, width } = Dimensions.get('window');
  const maskRowHeight = Math.round((height - 300) / 20);
  const maskColWidth = (width - 300) / 2;

  return (
    <View style={styles.container}>
     
      { !showCamera ? 
        <View>
          <Image
            source={{uri:"https://cdn.qrstuff.com/images/default_qrcode.png"}}
            style={{width:width,height:400,margin:20}}
          />
          <Text style={styles.messageText}>Scan QR Code to win exciting Rewards!!!</Text>
          <FAB
            icon="camera"
            label="scan"
            large
            style={{backgroundColor:Colors.blue500}}
            onPress={() => setShowCamera(true)}
            />
              
        </View>
        :
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          <View style={styles.maskOutter}>
              <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
              <View style={[{ flex: 30 }, styles.maskCenter]}>
              <View style={[{ width: maskColWidth }, styles.maskFrame]} />
              <View style={styles.maskInner} />
              <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            </View>
          <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]} />
          <FAB
              icon="close"
              large
              style={{backgroundColor:Colors.red500}}
              onPress={() => setShowCamera(false)}
            />
        </View>
        </BarCodeScanner>  
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageText:{
    flex:1,
    justifyContent:"center",
    alignContent:'center',
    fontSize:25,
    fontWeight:'bold',
    padding:20,
    margin:20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: 300,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  maskCenter: { flexDirection: 'row' },
});

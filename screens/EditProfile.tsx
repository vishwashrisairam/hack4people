import * as React from 'react';
import { StyleSheet,ScrollView,View,Text } from 'react-native';
import { Button, Avatar, TextInput, IconButton, Colors } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';

export default function EditProfile({ navigation }) {

    const [valueUsername] = React.useState('Simba');
    const [valuePhone] = React.useState('000-000-0000');
    const [valueEmail] = React.useState('lionking@gmail.com');
    const [valuePassword] = React.useState('hello123');

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={{...styles.title,textAlign:"center"}}>Edit Profile Page</Text>
            <View style={{margin:10}}>
            {/* <Text style={styles.title}>Edit name</Text> */}
            <TextInput
                style={styles.textInput}
                value=""
                label="Username"
                textContentType={"username"}
            />
            {/* <Text style={styles.title}>Edit phone number</Text> */}
            <TextInput
                style={styles.textInput}
                value=""
                label="Phone Number"
                textContentType="telephoneNumber"
            />
            {/* <Text style={styles.title}>Edit email address</Text> */}
            <TextInput
                style={styles.textInput}
                value=""
                label="Email"
                textContentType="emailAddress"
            />
            {/* <Text style={styles.title}>Edit password</Text> */}
            <TextInput
                style={styles.textInput}
                value=""
                label="Password"
                textContentType="newPassword"
            />
            <Button 
                icon="update" 
                mode="contained" 
                compact={true} 
                color="gold"
                style={{margin:10,padding:10}}
            >
               Save
            </Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        margin: 10
    },
    subheading: {
        fontSize: 16,
        margin: 10
    },
    flexcontainer: {
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        margin: 20
    },
    textInput:{
        // height: 40,
        borderColor: 'gray',
        borderWidth: 1,
         margin: 10 
    }
});

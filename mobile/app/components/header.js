import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default function Header(props){
    const [user, setUser] = useState('');

    useEffect(() => {
        setUser(props.navigation.getParam('user'));
    })
    return (
        <View style={styles.header}>
            <Image source={{uri: `${user.dp}`}}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft : 15 }}
        />
        <Text
                  style={{
                    width: 135,
                  height: 17,
                  left: 17,
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 50,
                    lineHeight: 21 // position where you want
                   
                  }}
                >{user.name}</Text>
                <Text style={{
                    width: 33,
                  height: 11,
                  left: 17,
                    fontSize: 12,
                    color: '#FFFFFF',
                    position: 'absolute', // child
                    bottom: 20,
                    lineHeight: 21
                     }}>Online</Text>
    </View>
    )
    
}

 const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'green'
    }
 });
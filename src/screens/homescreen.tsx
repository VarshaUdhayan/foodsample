import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';

export const Homescreen =() =>{
    return(
        <View style={styles.container}>
        <View  style ={styles.navigation}>
            <Text>
               Navigation
            </Text>
        </View>
        <View style ={styles.body}>
            <Text>
                Home Screen
            </Text>
        </View>
        <View style ={styles.footer}>
            <Text>
                Footer
            </Text>
        </View>
            
        
        </View>
    )
}

const styles= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'green',
    },
    navigation:{
        flex:2,
        backgroundColor:'yellow',
    },
    body:{
        flex:9,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    footer:{
        flex:1,
        backgroundColor:'cyan',
    },

    })
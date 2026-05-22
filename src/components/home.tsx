import { Color, router } from 'expo-router';
import React from 'react';
import { Image, ScrollView, View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';


export default function Home() {
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Image source={require('../images/lantern.png')} style={{ width: 120, objectFit: 'fill', height: 200, }} />
                <Image source={require('../images/traditon.png')} style={{ width: 120, objectFit: 'contain', height: 220, transform: [{ scale: 1.3, },{translateY:15}] }} />
                <Image source={require('../images/lantern.png')} style={{ width: 120, objectFit: 'fill', height: 200, }} />
                
            </View>
            <View style={styles.container}>
                
                    <TouchableOpacity onPress={()=> router.push( '/Menu' )}><Text style={styles.text}>The Small Souk </Text></TouchableOpacity>    
                
            </View>
            <View style={styles.dividerContainer}>
              <Image 
                source={require('../images/string.png')} style={styles.dividerImage} />
               
            </View>
            <View>
                <Text style={{color:'#8B4513', fontSize: 16,  textAlign: "center",fontWeight: "800", }}>A TRADITIONALL MOROCCAN RESTAURAN</Text>
                 <Image 
                source={require('../images/string.png')} style={styles.dividerImage} />
                <Text style={{color:'#8B4513', fontSize: 40,  textAlign: "center",fontWeight: "800", fontFamily:'cursive'}}>Welcome !</Text>
                <Text style={{color:'#8B4513', fontSize: 40,  textAlign: "center",fontWeight: "800", fontFamily:'cursive'}}>Experience the
                 Heart of Morocco</Text>
                 <Image 
                source={require('../images/string.png')} style={styles.dividerImage} />
                 <Image 
                source={require('../images/table.jpg')} style={{ objectFit: 'contain', height: 200, width:-50 }} />
               

            </View>
            
        </ScrollView>   

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", 
        marginTop: 30,
    },
    text:{
        color: "#F5E6CA",
        paddingHorizontal: 50,
        paddingVertical: 20,
        backgroundColor: "#8B4513",
        borderRadius: 30,
        textAlign: "center",
        fontSize: 26,
        fontWeight: "600",
        borderWidth: 2,
        borderColor: "black",
    },
    dividerContainer: {
        alignItems: "center",
        marginVertical: -20,
    },
    dividerImage: {
        width:"100%" ,
        height: 100,
        resizeMode: "contain",
    },
})
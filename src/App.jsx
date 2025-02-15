import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props =>{
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>React Navigation</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems: "center",
    },
    texto:{
        fontWeight:"bold",
        fontSize: 24        
    }
})
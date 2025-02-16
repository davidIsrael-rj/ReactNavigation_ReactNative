import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TelaA from "./views/TelaA";

export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <TelaA/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        
    }
})
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import TelaA from "./views/TelaA";
import TelaB from "./views/TelaB";

export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <TelaA/>
            <TelaB/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        
    }
})
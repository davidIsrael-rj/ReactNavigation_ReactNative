import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import TextoCentral from "./components/TextoCentral";

export default props =>{
    return(
        <SafeAreaView style={styles.container}>
            <TextoCentral>App</TextoCentral>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,        
        
    }
})
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default props => (
    <SafeAreaView style={styles.container}>
        <Text>Nav!</Text>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#FFF'
    }
})
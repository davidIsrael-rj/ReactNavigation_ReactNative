import React from "react";

import {enableScreens} from 'react-native-screens'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
import Stack from "./Stack";

enableScreens();
export default props => (
    <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <Stack />
        </SafeAreaView>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
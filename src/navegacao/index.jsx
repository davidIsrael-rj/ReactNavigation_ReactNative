import React from "react";
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";
// import Drawer from "./Drawer";
// import Stack from "./Stack";
import Tab from "./Tab";

enableScreens();
export default props => (
    <SafeAreaView style={styles.container}>
        <NavigationContainer>
            {/* <Drawer/> */}
            <Tab />
            {/* <Stack /> */}
        </NavigationContainer>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
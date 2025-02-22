import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaC from "../views/TelaC";
import TelaB from "../views/TelaB";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        initialRouteName="TelaB"
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarIcon: ({ color, size }) => {
              let iconName;
      
              if (route.name === 'TelaA') {
                iconName = 'power'; // exemplo de ícone para TelaA
              } else if (route.name === 'TelaB') {
                iconName = 'access-point'; // exemplo para TelaB
              } else if (route.name === 'TelaC') {
                iconName = 'remote'; // exemplo para TelaC
              }
      
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}>

        <Tab.Screen name="TelaA" component={TelaA} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} />
    </Tab.Navigator>
)
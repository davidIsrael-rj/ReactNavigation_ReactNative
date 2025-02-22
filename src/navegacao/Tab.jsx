import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaA from "../views/TelaA";
import TelaC from "../views/TelaC";
import TelaB from "../views/TelaB";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export default props => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'blue',
      tabBarIcon: ({ focused, color, size }) => {
        let iconName

        switch (route.name) {
          case 'TelaA':
            iconName = focused
              ? 'access-point-check'
              : 'access-point'
            break;
          case 'TelaB':
            iconName = focused
              ? 'account-check'
              : 'account'
            break;
          case 'TelaC':
            iconName = focused
              ? 'cog-play-outline'
              : 'cog-outline'
            break;
        }
        return <Icon name={iconName} size={size} color={color} />
      },
    })}

  >

    <Tab.Screen name="TelaA" component={TelaA} 
      options={{title: 'Inicial'}} />
    <Tab.Screen name="TelaB" component={TelaB} 
      options={{title: 'Dados Pessoais'}}/>
    <Tab.Screen name="TelaC" component={TelaC} 
      options={{title:'Configuração'}}/>
  </Tab.Navigator>
)
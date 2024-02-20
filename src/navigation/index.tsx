import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {RootBottomStackParams} from './types';
import TopStories from '../screens/TopStories';
import Search from '../screens/Search';
import Colors from '../constants/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator<RootBottomStackParams>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.black,
          tabBarInactiveTintColor: Colors.dark_grey,
          tabBarStyle: {
            position: 'absolute',
            width: '76%',
            height: 54,
            backgroundColor: Colors.grey,
            bottom: 12,
            left: '12%',
            right: '12%',
            borderRadius: 12,
          },
        }}>
        <Tabs.Screen
          name="Home"
          component={TopStories}
          options={() => ({
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <IonIcon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={color}
              />
            ),
          })}
        />
        <Tabs.Screen
          name="Search"
          component={Search}
          options={() => ({
            title: 'Search',
            tabBarShowLabel: false,
            tabBarIcon: ({focused, color}) => (
              <IonIcon
                name={focused ? 'search' : 'search-outline'}
                size={24}
                color={color}
              />
            ),
          })}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from './Screens/Home';
import Explore from './Screens/Explore';
import Upload from './Screens/Upload';
import Subscriptions from './Screens/Subscriptions';
import Library from './Screens/Library';
import {color} from 'react-native-reanimated';

const BottomTab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          style: {
            backgroundColor: '#151515',
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="explore" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Upload"
          component={Upload}
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="pluscircleo" color={color} size={32} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Subscriptions"
          component={Subscriptions}
          options={{
            tabBarLabel: 'Subscriptions',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="subscriptions" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Library"
          component={Library}
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="video-library" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;

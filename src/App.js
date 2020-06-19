import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, View, Text, FlatList} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import {Cities, Restaurants, RestaurantDetails} from './pages'


const Stack = createStackNavigator();

const App = () => {
  return(
      <NavigationContainer >
        <Stack.Navigator initialRouteName={Cities} headerMode="none">
          <Stack.Screen name="Cities" component={Cities} />
          <Stack.Screen name="Restaurants" component={Restaurants} />
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App
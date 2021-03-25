import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BlogList from './src/BlogList';
import CommentList from './src/CommentList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recipes Blog" component={BlogList} />
        <Stack.Screen name="Comments" component={CommentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

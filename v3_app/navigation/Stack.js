import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';
import EditProfile from '../components/EditProfile';
import MyPoint from '../components/MyPoint';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
          borderBottomColor: ' white',
          shadowColor: 'white',
        },
        headerTintColor: 'black',
        headerBackTitleVisible: false,
        // headerShown: false,
      }}
    >
      <Stack.Screen name='Tabs' component={Tabs} />
      <Stack.Screen name='회원 정보 수정' component={EditProfile} />
      <Stack.Screen name='내 포인트' component={MyPoint} />
    </Stack.Navigator>
  );
};

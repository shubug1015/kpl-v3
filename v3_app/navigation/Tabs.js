import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screens/Home/HomeContainer';
import MyPage from '../screens/MyPage';
import CreateSurvey from '../screens/CreateSurvey';
import Shop from '../screens/Shop';
import ShowMore from '../screens/ShowMore';
import { theme } from '../Theme';

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || '홈';

export default ({ navigation, route }) => {
  const statusBarStyle = getHeaderName(route);

  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
      headerShown: name === '홈' ? false : true,
    });
  }, [route]);

  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName = '';
            if (route.name === '설문 작성하기') {
              iconName = 'file-document-box-plus-outline';
            } else if (route.name === '앤서미샵') {
              iconName = 'cart-outline';
            } else if (route.name === '홈') {
              iconName = 'home';
            } else if (route.name === '마이페이지') {
              iconName = 'account';
            } else if (route.name === '더보기') {
              iconName = 'dots-horizontal';
            }
            return (
              <MaterialCommunityIcons
                name={iconName}
                color={focused ? '#dbdbdb' : 'white'}
                size={28}
              />
            );
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: theme.mainColor,
            borderTopColor: theme.mainColor,
            height: '8%',
          },
          labelStyle: {
            bottom: 5,
            color: 'white',
            fontSize: 10,
          },
        }}
        initialRouteName='홈'
      >
        <Tabs.Screen name='설문 작성하기' component={CreateSurvey} />
        <Tabs.Screen name='앤서미샵' component={Shop} />
        <Tabs.Screen name='홈' component={Home} />
        <Tabs.Screen name='마이페이지' component={MyPage} />
        <Tabs.Screen name='더보기' component={ShowMore} />
      </Tabs.Navigator>
      {statusBarStyle === '홈' ? (
        <StatusBar barStyle='light-content' />
      ) : (
        <StatusBar barStyle='dark-content' />
      )}
    </>
  );
};

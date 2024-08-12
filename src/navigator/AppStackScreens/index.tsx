import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomMenu from '../BottomMenu';
import { bottomTabsStackPath } from '../../constants/pathLocations';

const AppStack = createStackNavigator();

const BottomTabsStackScreen = () => <BottomMenu />;

const AppStackScreen = () => {
  return (
    <AppStack.Navigator initialRouteName={bottomTabsStackPath} screenOptions={{ headerShown: false }}>
      <AppStack.Screen name={bottomTabsStackPath} component={BottomTabsStackScreen} />
    </AppStack.Navigator>
  );
};

export default AppStackScreen;

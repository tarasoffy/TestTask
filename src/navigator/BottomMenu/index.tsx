import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Users from '../../screens/App/Users';
import SignUp from '../../screens/App/SignUp';
import { usersPath, signUpPath, usersStackPath, signUpStackPath } from '../../constants/pathLocations';
import Header from '../../components/Header';
import { tabIcon } from '../TabBar/TabBar';

const Tab = createBottomTabNavigator();

const UsersStackScreen = () => {
  const UserStack = createStackNavigator();  
  return (
    <UserStack.Navigator initialRouteName={usersStackPath}>
      <UserStack.Screen
        name={usersStackPath}
        component={Users}
        options={{
          header: () => <Header />,
        }}
      />
    </UserStack.Navigator>
  );
};

const SignUpStackScreen = () => {
  const SignUpStack = createStackNavigator();  
  return (
    <SignUpStack.Navigator initialRouteName={signUpStackPath}>
      <SignUpStack.Screen
        name={signUpStackPath}
        component={SignUp}
        options={{ 
          header: () => <Header />,
        }}
      />
    </SignUpStack.Navigator>
  );
};

const BottomMenu: FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}: {focused: boolean}) => tabIcon(focused, route.name),
        tabBarLabel: () => <></>,
      })}
      initialRouteName={usersPath}
    >
      <Tab.Screen name={usersPath} component={UsersStackScreen} />
      <Tab.Screen name={signUpPath} component={SignUpStackScreen} />
    </Tab.Navigator>
  );
};

export default BottomMenu;


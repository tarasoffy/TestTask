import React, {ReactElement} from 'react';
import {View, Text} from 'react-native';
import UsersIcon from '../../assets/images/icons/three-users.svg';
import ActiveUsersIcon from '../../assets/images/icons/three-users-active.svg';
import UsersPlusIcon from '../../assets/images/icons/user-plus-ios.svg';
import ActiveUsersPlusIcon from '../../assets/images/icons/active-user-plus-ios.svg';
import UserPlusAndroidIcon from '../../assets/images/icons/user-plus-android.svg';
import UserPlusAndroidActiveIcon from '../../assets/images/icons/user-plus-android-active.svg';
import UserAndroidIcon from '../../assets/images/icons/two-people-android.svg';
import UserAndroidActiveIcon from '../../assets/images/icons/two-people-active-android.svg';
import {RootStackParamList} from '../../typescript/types';
import styles from './styles';
import { signUpPath, usersPath } from '../../constants/pathLocations';
import { grayColor, tintColor } from '../../constants/colors';
import { isAndroid } from '../../constants/common';

const tabBarName = (focused: boolean, route: string): ReactElement => {
  const getLabel = (): string =>
    ({
      [usersPath]: 'Users',
      [signUpPath]: 'Sign up',
    }[route as keyof RootStackParamList]);

  return <Text style={[styles.label, {color: focused ? tintColor : grayColor}]}>{getLabel()}</Text>;
};

export const tabIcon = (focused: boolean, route: string): ReactElement => {
  const getIcon = (): ReactElement =>
    ({
      [usersPath]: focused ? isAndroid? <UserAndroidActiveIcon />: <ActiveUsersIcon />: isAndroid? <UserAndroidIcon/>: <UsersIcon /> ,
      [signUpPath]: focused ? isAndroid? <UserPlusAndroidActiveIcon/>: <ActiveUsersPlusIcon />: isAndroid? <UserPlusAndroidIcon/>: <UsersPlusIcon />,
    }[route as keyof RootStackParamList]);

  return (
    <View style={[styles.wrapper, {marginTop: isAndroid? 0: 20}]}>
      <View style={styles.iconWr}>{getIcon()}</View>
      <View>{tabBarName(focused, route)}</View>
    </View>
  );
};

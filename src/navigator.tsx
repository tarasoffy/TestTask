import {NavigationContainer} from '@react-navigation/native';
import AppStackScreens from './navigator/AppStackScreens';

const Navigator = () => {
  return <NavigationContainer>{<AppStackScreens />}</NavigationContainer>;
};

export default Navigator;

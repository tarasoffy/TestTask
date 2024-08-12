import React, { useEffect } from 'react';
import Navigator from './src/navigator';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { isAndroid } from './src/constants/common';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {

  useEffect(() => {
    if(isAndroid) SplashScreen.hide();
  },[])

  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );

}

export default App;

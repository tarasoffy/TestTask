import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import styles from './styles'

function Header(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Working with GET request</Text>
      </View>
    </SafeAreaView>
  );
}

export default Header;

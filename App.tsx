import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from './src/constants/Colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigator />
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

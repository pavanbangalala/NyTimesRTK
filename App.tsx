import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigator from './src/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Colors from './src/constants/Colors';
import {Provider} from 'react-redux';
import {store} from './src/redux/thunk/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
        <StatusBar barStyle={'light-content'} backgroundColor={Colors.black} />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});

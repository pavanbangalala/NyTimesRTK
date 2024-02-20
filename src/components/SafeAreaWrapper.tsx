import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

type SafeAreaWrapperProps = {
  children: ReactNode;
};
const SafeAreaWrapper = ({children}: SafeAreaWrapperProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

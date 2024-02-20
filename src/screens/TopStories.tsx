import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const TopStories = () => {
  return (
    <View style={styles.container}>
      <Text>TopStories</Text>
    </View>
  );
};

export default TopStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

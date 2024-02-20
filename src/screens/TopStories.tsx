import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

const TopStories = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>TopStories</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default TopStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

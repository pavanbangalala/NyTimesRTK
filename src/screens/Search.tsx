import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';

const Search = () => {
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    </SafeAreaWrapper>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

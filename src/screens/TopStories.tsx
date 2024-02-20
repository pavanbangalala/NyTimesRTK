import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../constants/Colors';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import {TopStoriesApi, useGetTopSportStoriesQuery} from '../redux/query/NytApi';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTopSportsStories} from '../redux/thunk/NytThunkApi';

const TopStories = () => {
  //   const {data, error, isLoading} =
  //     TopStoriesApi.endpoints.getTopSportStories.useQuery();

  //   useEffect(() => {
  //     console.log('data ', data);
  //   }, [data]);

  const dispatch = useDispatch();
  const topSportsStories = useSelector(state => state.TopSporstStories);
  useEffect(() => {
    dispatch(fetchTopSportsStories());
  }, []);

  useEffect(() => {
    console.log('top sports stories', topSportsStories.data.results);
  }, [topSportsStories]);
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

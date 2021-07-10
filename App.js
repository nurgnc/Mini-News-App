import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import newsData from './src/data/news_data.json'
import NewsCard from './src/components/NewsCard'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList 
      data={newsData}
      renderItem={({item}) => <NewsCard news={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

import React from 'react';
import { StyleSheet, Image, View, FlatList, ScrollView, Dimensions, Text } from 'react-native';
import newsData from './src/data/news_data.json'
import bannerData from './src/data/news_banner_data.json'
import NewsCard from './src/components/NewsCard'

export default function App() {

  const renderNews = ({ item }) => <NewsCard news={item} />

  return (
    <View style={styles.container}>
    <Text style={styles.title}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              bannerData.map(data => (<Image style={styles.bannerImage} source={{ uri: data.imageUrl }} />))
            }
          </ScrollView>
        )}
        keyExtractor={item => item.id.toString()}
        data={newsData}
        renderItem={renderNews}
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
  bannerImage: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 40,
    marginVertical: 10,
  }
});

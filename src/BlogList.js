import React from 'react';
import AppLoading from 'expo-app-loading';

import { FlatList, StyleSheet, View } from 'react-native';
import { useCustomFonts } from './hooks';

import BlogItem from './BlogItem';

import { posts } from './posts.json';

export default function BlogList({ navigation }) {
  const [fontsLoaded] = useCustomFonts();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const doRenderItem = (item) => {
    const hasComments = (item.comments?.length || 0) > 0;

    return (
      <BlogItem
        item={item}
        onCommentPress={() =>
          hasComments &&
          navigation.navigate('Comments', {
            comments: item.comments,
            blogTitle: item.title,
          })
        }
      />
    );
  };

  return (
    <View style={styles.blogContainer}>
      <FlatList
        keyboardShouldPersistTaps="always"
        data={posts}
        keyExtractor={(item) => item.createdAt}
        renderItem={({ item }) => doRenderItem(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  blogContainer: {
    flex: 1,
    marginTop: 20,
    padding: 15,
  },
});

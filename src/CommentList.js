import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CommentList = ({ route }) => {
  const { comments, blogTitle } = route.params;

  return (
    <View style={styles.comments}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.titleContainer}>
            <View style={styles.title}>
              <Text style={styles.titleText}>{blogTitle}</Text>
            </View>
            <View>
              <Text style={styles.subTitleText}>What people have to say:</Text>
            </View>
          </View>
        }
        data={comments}
        renderItem={({ item }) => (
          <View key={item.createdAt}>
            <Text style={styles.commentsText}>{item.body}</Text>
          </View>
        )}
        keyExtractor={(item) => item.createdAt}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comments: {
    flex: 1,
  },
  titleContainer: {},
  title: {
    backgroundColor: '#ccc',
    padding: 20,
  },
  titleText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  },
  subTitleText: {
    fontSize: 17,
    paddingLeft: 20,
    paddingBottom: 10,
    backgroundColor: '#ccc',
  },
  commentsText: {
    fontSize: 22,
    padding: 10,
  },
  separator: { backgroundColor: '#ccc', height: 1 },
});

export default CommentList;

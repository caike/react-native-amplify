import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BlogItem = ({ item, onCommentPress }) => {
  return (
    <View key={item.createdAt} style={styles.cell}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>March 22, 2021</Text>
      <Text style={styles.text}>{item.body}</Text>
      <View style={styles.comments}>
        <TouchableOpacity
          style={styles.commentsButton}
          onPress={onCommentPress}
        >
          <View>
            <Text style={styles.commentsText}>
              Comments ({item.comments?.length || '0'})
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cell: {
    marginBottom: 35,
  },
  text: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  comments: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  commentsText: {
    fontWeight: '200',
    fontSize: 18,
    padding: 10,
  },
  commentsButton: {
    backgroundColor: '#CCC',
    borderRadius: 10,
    marginRight: 20,
  },
  title: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
  },
  date: {
    fontWeight: '200',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  },
});

export default BlogItem;

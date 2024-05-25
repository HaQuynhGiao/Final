import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { TRASH } from '../data/dummy-data';

const TrashScreen = () => {
  const restoreNoteHandler = (noteId) => {
    // Not yet
  };

  const deleteNoteHandler = (noteId) => {
    // Not yet
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={TRASH}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text>{item.content}</Text>
            <Button title="Restore" onPress={() => restoreNoteHandler(item.id)} />
            <Button title="Delete" onPress={() => deleteNoteHandler(item.id)} />
          </View>
        )}
      />
      <Button title="Restore All" onPress={() => {}} />
      <Button title="Empty Trash" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  note: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default TrashScreen;

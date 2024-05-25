import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FoldersScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Create New Folder" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default FoldersScreen;

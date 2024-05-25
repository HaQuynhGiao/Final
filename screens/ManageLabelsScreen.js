import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LABELS } from '../data/dummy-data';

const ManageLabelsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {LABELS.map(label => (
        <Button key={label.id} title={label.label} onPress={() => {}} />
      ))}
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

export default ManageLabelsScreen;

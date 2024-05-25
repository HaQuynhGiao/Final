import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import { LABELS } from '../data/dummy-data';

const LabelsScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredLabels, setFilteredLabels] = useState(LABELS);

  const searchHandler = (text) => {
    setSearchText(text);
    if (text) {
      setFilteredLabels(LABELS.filter(label => label.label.includes(text)));
    } else {
      setFilteredLabels(LABELS);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search labels"
        value={searchText}
        onChangeText={searchHandler}
      />
      <FlatList
        data={filteredLabels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button title={item.label} onPress={() => {}} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});

export default LabelsScreen;

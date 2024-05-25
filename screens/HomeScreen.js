
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NOTES } from '../data/dummy-data'; 
import PrimaryNote from '../components/primaryNote'; 
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
    const [notes, setNotes] = useState(NOTES);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(NOTES);

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredNotes(notes);
        } else {
            const filtered = notes.filter(note => note.content.toLowerCase().includes(query.toLowerCase()));
            setFilteredNotes(filtered);
        }
    };

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
        setFilteredNotes([...notes, newNote]);
    };

    const editNote = (updatedNote) => {
        const updatedNotes = notes.map(note => note.id === updatedNote.id ? updatedNote : note);
        setNotes(updatedNotes);
        setFilteredNotes(updatedNotes);
    };

    const renderNote = ({ item }) => (
        <PrimaryNote
            color={item.color}
            label={item.label}
            note={item.content}
            date={item.updateAt}
            bookmark={item.isBookmarked}
            onPress={() => navigation.navigate('EditNote', { note: item, editNote })}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
                <Icon name="search" size={20} color="black" />
            </View>

            {filteredNotes.length === 0 ? (
                <Text style={styles.emptyText}>{searchQuery ? 'Not found!' : 'Please add a new note'}</Text>
            ) : (
                <FlatList
                    data={filteredNotes}
                    renderItem={renderNote}
                    keyExtractor={(item) => item.id}
                />
            )}

            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewNote', { addNote })}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#EFEFEF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 8,
        borderRadius: 5,
        marginRight: 10,
    },
    addButton: {
      position: 'absolute',
      right: 20,
      bottom: 20,
      backgroundColor: '#007BFF',
      width: 40,
      height: 40,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
  },
  plus: {
    color: 'white',
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: 'grey',
    },
});

export default HomeScreen;

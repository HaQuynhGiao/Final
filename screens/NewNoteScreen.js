import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { generateUniqueId } from '../utils/idGenerator'; 

const NewNoteScreen = ({ route, navigation }) => {
    const { addNote } = route.params;
    const [noteContent, setNoteContent] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleAddNote = () => {
        const newNote = {
            id: generateUniqueId(), 
            color: selectedColor,
            labelIds: [], 
            content: noteContent,
            updateAt: new Date(),
            isBookmarked: false,
        };
        addNote(newNote);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter note content"
                value={noteContent}
                onChangeText={setNoteContent}
                multiline
            />
            <Button title="Add Note" onPress={handleAddNote} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
    },
    input: {
        height: 200,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        marginBottom: 20,
    },
});

export default NewNoteScreen;


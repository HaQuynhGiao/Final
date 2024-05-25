import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditNoteScreen = ({ route, navigation }) => {
    const { note, editNote } = route.params;
    const [noteContent, setNoteContent] = useState(note.content);

    const handleSaveNote = () => {
        const updatedNote = { ...note, content: noteContent, updateAt: new Date() };
        editNote(updatedNote);
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={noteContent}
                onChangeText={setNoteContent}
                multiline
            />
            <Button title="Save Note" onPress={handleSaveNote} />
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

export default EditNoteScreen;

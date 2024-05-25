import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { differenceInHours, differenceInDays } from 'date-fns';
import Icon from 'react-native-vector-icons/FontAwesome';

const PrimaryNote = ({ color, label, note, date, bookmark, onPress }) => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hoursElapsed = differenceInHours(currentTime, new Date(date));
    const daysElapsed = differenceInDays(currentTime, new Date(date));

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View>
                <View style={styles.status}>
                    <View style={[styles.circle, { backgroundColor: color }]} />
                    <View style={styles.timeText}>
                        {hoursElapsed >= 24 ? (
                            <Text style={styles.timeText}>{daysElapsed} days ago</Text>
                        ) : (
                            <Text style={styles.timeText}>{hoursElapsed} hrs ago</Text>
                        )}
                    </View>
                    <View>
                        {bookmark && (
                            <Icon name="bookmark" size={18} color="grey" style={{ position: 'absolute', left: 250, bottom: 2 }} />
                        )}
                    </View>
                </View>
                <Text style={styles.label}>{label}</Text>
                <Text>{note}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
    },
    status: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        alignItems: 'center',
    },
    timeText: {
        fontSize: 15,
        alignItems: 'center',
        left: 5,
        color: 'grey',
    },
    label: {},
});

export default PrimaryNote;

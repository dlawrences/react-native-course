import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const guestName = 'Laurentiu';

    return (
    <View>
        <Text style={styles.headerStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {guestName}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;
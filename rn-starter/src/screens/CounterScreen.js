import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_counter':
            return { ...state, counter: state.counter + action.payload }
        default:
            return state
    } 
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    const { counter } = state

    return (
        <View>
            <Button title="Increase Counter" onPress={() => dispatch({ type: 'change_counter', payload: 1 }) } />
            <Button title="Decrease Counter" onPress={() => dispatch({ type: 'change_counter', payload: -1}) } />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
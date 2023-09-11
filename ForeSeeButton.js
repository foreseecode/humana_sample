import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const ForeSeeButton = (props) => {
    const { title = 'Need Title', style = {}, textStyle = {}, onPress, showCount = false } = props;
    const [count, setCount] = useState(0)

    function renderCount() {
        return ((showCount) ? "(" + count + "/" + showCount + ")" : "");
    }

    return (
        <TouchableOpacity onPress={() => { setCount(count + 1); onPress(this); }} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title + " " + renderCount() }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 46,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',

        shadowRadius: 3,
        shadowOpacity: 0.25,
        marginTop: 20,

        backgroundColor: '#EB2B3D',
        shadowColor: '#000000',
        shadowOffset: { height: 3, width: 0 },
    },

    text: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});

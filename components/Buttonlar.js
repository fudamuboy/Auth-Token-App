import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Buttonlar({ children, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.btn, pressed && styles.pressed]} onPress={onPress}>
            <View>
                <Text style={styles.text}>{children} </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'green',
        marginVertical: 10,
        paddingVertical: 10,
        borderRadius: 20,
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },

})
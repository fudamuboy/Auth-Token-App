import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue, value, secure }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input}
                autoCapitalize='none'
                keyboardType={keyboardType}
                onChangeText={onUpdateValue}
                value={value}
                secureTextEntry={secure} />
        </View>
    )
}
// ds cette partie je fais les props et declarer ds le AuthForm
const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        fontSize: 16,
        margin: 10,
    },
    input: {
        backgroundColor: 'pink',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
})
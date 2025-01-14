import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({
    label, keyboardType, onUpdateValue, value, secure, isInvalid }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
            <TextInput style={[styles.input, isInvalid && styles.inputInvalid]}
                autoCapitalize='none'
                keyboardType={keyboardType}
                onChangeText={onUpdateValue}
                value={value}
                secureTextEntry={secure}
            />
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
        margin: 5,
    },
    input: {
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    labelInvalid: {
        color: 'red',
    },
    inputInvalid: {
        backgroundColor: 'red',
    },

})
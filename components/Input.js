import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue }) {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput placeholder='Mali'
                autoCapitalize='none'
                keyboardType={keyboardType}
                onChangeText={onUpdateValue} />
        </View>
    )
}
// ds cette partie je fais les props et declarer ds le AuthForm
const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome !</Text>
            <Text style={styles.text}>You have successfully logged in</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {},
})
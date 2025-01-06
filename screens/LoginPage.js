import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthContent from '../components/AuthContent'

// A tarvers ce props on a cree une liasion entre les pages et le LoginPage
// isLogin est true ici 
export default function LoginPage() {
    return (
        <AuthContent isLogin />
    )
}

const styles = StyleSheet.create({})
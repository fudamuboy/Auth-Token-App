import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading'
import { login } from '../util/auth'

// A tarvers ce props on a cree une liasion entre les pages et le LoginPage
// isLogin est true ici 
export default function LoginPage() {
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    async function LoginHandler({ email, password }) {
        setIsAuthenticating(true) // Affiche le chargement
        try {
            // Appelle l'API pour créer l'utilisateur
            await login(email, password)
        } catch (error) {
            // Gérez les erreurs ici (par exemple, afficher une alerte)

            Alert.alert('Giris yapilmadi', 'Please check your infos')
        } finally {
            setIsAuthenticating(false) // Cache le chargement
        }
    }

    // Si en cours d'authentification, afficher le composant de chargement
    if (isAuthenticating) {
        return <Loading msg="Kullanici giris yapioo..." />
    }
    return (

        <AuthContent isLogin
            onAuthenticate={LoginHandler} />
    )
}

const styles = StyleSheet.create({})
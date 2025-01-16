import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading'
import { AuthContext } from '../store/auth-context'

export default function SignUp() {
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    const authContext = useContext(AuthContext);

    async function signUpHandler({ email, password }) {
        setIsAuthenticating(true) // Affiche le chargement
        try {
            // Appelle l'API pour créer l'utilisateur
            const token = await createUser(email, password)
            authContext.authenticate(token)
        } catch (error) {
            // Gérez les erreurs ici (par exemple, afficher une alerte)

            Alert.alert('Kayit olmadi', 'Please check your infos')
        } finally {
            setIsAuthenticating(false) // Cache le chargement
        }
    }

    // Si en cours d'authentification, afficher le composant de chargement
    if (isAuthenticating) {
        return <Loading msg="Kullanici olusturuluyor..." />
    }

    return (
        <AuthContent onAuthenticate={signUpHandler} />
    )
}

// Styles (actuellement vide, mais prêt à être utilisé)
const styles = StyleSheet.create({})

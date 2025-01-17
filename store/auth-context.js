import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {

    const [authToken, setAuthToken] = useState('');

    useEffect(() => {

        async function fetchToken() {

            const storedToken = await AsyncStorage.getItem('token')
            if (storedToken) {
                setAuthToken(storedToken)
            }
        }
        fetchToken()
    }, [])

    function authenticate(token) {
        setAuthToken(token);
        AsyncStorage.setItem('token', token)
    }

    function logout() {
        setAuthToken('');
        AsyncStorage.removeItem('token')
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
// Ceci est le contexte d'authentification et le gestion d'etat a travers le AsyncStorage
// et le Token, il ya aussi le useEffect avec le fetchToken et plusieurs fonctions
// une de d'identifier le use en eneregistrant les infos ,une pr deconnecter par suppresion
// et une fournissant les donnees du contexte a ses children et le useEffect pr le stockage des donnees 

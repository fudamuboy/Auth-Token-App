import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm'
import Bouton from './Bouton'
import { useNavigation } from '@react-navigation/native'
useNavigation


// il affiche Create new user car ds la LoginPage notre Login is true
//  mais je mets false il yaura 'Login'
// Si isLogin = true : Affiche "Create new user".
//Sinon : Affiche "Login Up".
export default function AuthContent({ isLogin }) {

    const [credentialsInValid, setCredentialsInValid] = useState({
        email: false,
        password: false,
        mail: false,
        sifre: false,
    })

    function submitHandler(credentials) {
        console.log(credentials);
        let { email, password, mail, sifre } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === mail;
        const passwordAreEqual = password === sifre;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordAreEqual))
        ) {
            Alert.alert('Oops !', 'Check it again, there is something wrong.');
            setCredentialsInValid({
                email: !emailIsValid,
                mail: !emailIsValid || emailsAreEqual,
                password: !passwordIsValid,
                sifre: !passwordIsValid || passwordAreEqual,

            })
            return
        }
    }

    // bu kisminda sayfa arasinda gecis sagliyor
    const navigation = useNavigation()
    function gecisScreen() {
        if (isLogin) {
            navigation.navigate('SignUp')
        } else {
            navigation.navigate('Login')
        }

    }
    return (
        <View style={styles.container} >
            <AuthForm credentialsInValid={credentialsInValid} isLogin={isLogin} onsubmit={submitHandler} />
            <View>
                <Bouton onPress={gecisScreen}>
                    {isLogin ? ' Create new user' : 'Login Up'}
                </Bouton>
            </View>

        </View>

    )
}
// credentials : Les informations saisies par l'utilisateur
//  (par exemple, email et mot de passe).
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        marginTop: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 15,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,

    },
})
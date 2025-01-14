import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Buttonlar from './Buttonlar'
import { findFocusedRoute } from '@react-navigation/native'

// cette page sera concentre sur les forms qui se trouvent ds la page mais le code sera de l'autre 
// cote genre ds le AuthContent 

export default function AuthForm({ isLogin, onsubmit, credentialsInValid }) {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const [confirmEmail, setConfirmEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    console.log(credentialsInValid);

    function submitHandler() {
        onsubmit({
            email: enteredEmail,
            mail: confirmEmail,
            password: enteredPassword,
            sifre: confirmPassword


        })
    }

    function updateInput(inputType, enteredValue) {

        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue)
                break;

            case 'password':
                setEnteredPassword(enteredValue)
                break;

            case 'mail':
                setConfirmEmail(enteredValue)
                break;

            case 'sifre':
                setConfirmPassword(enteredValue)
                break;
        }

    }
    return (
        <View>
            <Input label="Email" keyboardType="Email-adress"
                onUpdateValue={updateInput.bind(this, 'email')}
                value={enteredEmail}
            />
            {!isLogin && (
                <Input label="Email Dogrula" keyboardType="Email-adress"
                    onUpdateValue={updateInput.bind(this, 'mail')}
                    value={confirmEmail}
                />
            )}
            <Input label="Sifre"
                secure
                onUpdateValue={updateInput.bind(this, 'password')}
                value={enteredPassword}
            />
            {!isLogin && (
                <Input label="Sifre Dogrula"
                    secure
                    onUpdateValue={updateInput.bind(this, 'sifre')}
                    value={confirmPassword}
                />
            )}
            <Buttonlar onPress={submitHandler}>
                {isLogin ? 'Login Up' : 'Save'}
            </Buttonlar>
        </View>
    )
}
// !islogin ca veut dire sil nest pas true alors affiche ceci ds le Signup'Page
// Mais il sera op present ds le Login car labas true 
const styles = StyleSheet.create({})
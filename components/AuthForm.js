import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

// cette page sera concentre sur les forms qui se trouvent ds la page mais le code sera de l'autre 
// cote genre ds le AuthContent 

export default function AuthForm({ isLogin }) {

    const [enteredEmail, setEnteredEmail] = useState('')

    function updateInput(inputType, enteredValue) {

        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue)
                break;
        }

    }
    return (
        <View>
            <Input label="Email" keyboardType="Email-adress"
                onUpdateValue={updateInput.bind(this, 'email')} />
        </View>
    )
}

const styles = StyleSheet.create({})
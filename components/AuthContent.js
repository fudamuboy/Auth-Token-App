import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import Bouton from './Bouton'


// il affiche Create new user car ds la LoginPage notre Login is true
//  mais je mets false il yaura 'Login'
// mais le islogin false ise il ya aura Login ds la page cette partie de false on
// je mets ceci ds la LoginPage isLogin={false}

export default function AuthContent({ isLogin }) {
    return (
        <View>
            <AuthForm isLogin={isLogin} />
            <View>
                <Bouton>
                    {isLogin ? ' Create new user' : 'Login'}
                </Bouton>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({})
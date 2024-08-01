import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { RegisterComponent } from './app/components/auth/RegisterComponent'
import { LoginComponent } from './app/components/auth/LoginComponent'
import { Stack } from 'expo-router'

export class App extends Component {
    render() {
        return (
            // <LoginComponent></LoginComponent>
            <RegisterComponent></RegisterComponent>
        )
    }
}

export default App
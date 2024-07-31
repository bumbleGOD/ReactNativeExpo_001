import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RegisterComponent from './src/components/auth/RegisterComponent'
import LoginComponent from './src/components/auth/LoginComponent'

export class App extends Component {
  render() {
    return (
      <RegisterComponent></RegisterComponent>
      // <LoginComponent></LoginComponent>
    )
  }
}

export default App


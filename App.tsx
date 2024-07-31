import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RegisterComponent from './src/components/auth/RegisterComponent'
import LoginComponent from './src/components/auth/LoginComponent'
import CVComponent from './src/components/logged/CVComponent'

export class App extends Component {
  render() {
    return (
      // <RegisterComponent></RegisterComponent>
      // <LoginComponent></LoginComponent>
      <CVComponent></CVComponent>
    )
  }
}

export default App


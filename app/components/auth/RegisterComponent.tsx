import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import { logoReactIcon } from '../../../assets';
import GlobalStyles from '../../../assets/styles/GlobalStyles'
import LoginComponent from './LoginComponent';

export function RegisterComponent() {
  const [screen, setScreen] = useState<'RegisterComponent' | 'LoginComponent'>('RegisterComponent');

  const aLoginComponent = () => {
    setScreen('LoginComponent');
  };

  if (screen === 'LoginComponent') {
    return <LoginComponent />;
  }

  return (
    <View style={[GlobalStyles.container]}>
      <View style={GlobalStyles.bodyTop}>
        <Image style={styles.logo_img} source={logoReactIcon}></Image>
        <Text style={[GlobalStyles.textTitle]}>Registrate</Text>
        <View style={GlobalStyles.content}>
          <View style={[GlobalStyles.inputContainer]}>
            <Text style={[GlobalStyles.textGeneral]}>Nombre de usuario:</Text>
            <TextInput style={[GlobalStyles.textInput]} placeholder='Ingresa tu nombre completo' placeholderTextColor={'#61677A'} />
          </View>
          <View style={[GlobalStyles.inputContainer]}>
            <Text style={[GlobalStyles.textGeneral]}>Correo electrónico:</Text>
            <TextInput style={[GlobalStyles.textInput]} placeholder='Ingresa tu nombre completo' placeholderTextColor={'#61677A'} />
          </View>
          <View style={[GlobalStyles.inputContainer]}>
            <Text style={[GlobalStyles.textGeneral]}>Contraseña:</Text>
            <TextInput style={[GlobalStyles.textInput]} placeholder='Ingresa tu nombre completo' placeholderTextColor={'#61677A'} />
          </View>
          <View style={[GlobalStyles.inputContainer]}>
            <Text style={[GlobalStyles.textGeneral]}>Repetir contraseña:</Text>
            <TextInput style={[GlobalStyles.textInput]} placeholder='Ingresa tu nombre completo' placeholderTextColor={'#61677A'} />
          </View>
        </View>
      </View>
      <View style={GlobalStyles.bodyBottom}>
        <Text style={GlobalStyles.textGeneral}>¿Ya tienes cuenta? <Text onPress={aLoginComponent} style={[GlobalStyles.textGeneral, GlobalStyles.anchorLink]}>Ingresa aquí</Text></Text>
        <Text style={GlobalStyles.buttonSubmit}>Registrarse</Text>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  logo_img: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default RegisterComponent
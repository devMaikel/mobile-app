import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function Login() {
  const navigation = useNavigation();

  const signInBtn = () => {
    navigation.navigate('signupone');
  }

  const accessBtn = () => {
    navigation.navigate('mainpage');
  }

  return (
    <View style={styles.generalContainer}>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/loginPageImage.png')} style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Bem vindo a PEX!</Text>
        <Text style={styles.text}>Informe os seus dados para ter acesso a um mundo de economia para sua obra</Text>
        <TextInput 
          placeholder="Email"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
          textContentType='password'
          placeholderTextColor='#B8B5C3'
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.passRequest}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={accessBtn}>
          <Text style={styles.btnText}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.account}>
          Não possui uma conta?
          <Text style={styles.account2} onPress={ signInBtn }> Criar conta</Text>
        </Text>
      </View>
    </View>
  );
}

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function Login() {
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ loginBtnIsDisabled, setLoginBtnIsDisabled ] = useState(true);
  const navigation = useNavigation();

  const validateEmail = () => (/\S+@\S+\.\S+/).test(inputEmail); //regex para validacao de formato do email
  const validateInputs = () => {
    if (validateEmail() && inputPassword.length > 5) {
      setLoginBtnIsDisabled(false);
    } else {
      setLoginBtnIsDisabled(true);
    }
  }

  useEffect(() => {
    validateInputs()
  }, [inputEmail, inputPassword]);

  const signInBtn = () => {
    navigation.navigate('signupone');
  }

  const accessBtn = () => {
    if(!validateEmail()) {
      Alert.alert('Email inválido', 'Insira um email em formato válido');
    } else if (inputPassword.length < 6) {
      Alert.alert('Senha inválida','Senha deve conter 6 ou mais caracteres');
    } else {
      navigation.navigate('mainpage');
    }
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
          value={inputEmail}
          onChangeText={text => setInputEmail(text)}
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
          textContentType='password'
          placeholderTextColor='#B8B5C3'
          secureTextEntry={true}
          value={inputPassword}
          onChangeText={text => setInputPassword(text)}
        />
        <TouchableOpacity onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}>
          <Text style={styles.passRequest}>Esqueci minha senha</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ loginBtnIsDisabled ? {...styles.btn, backgroundColor: 'gray'} : styles.btn} 
          onPress={accessBtn} 
        >
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

// disabled={loginBtnIsDisabled}

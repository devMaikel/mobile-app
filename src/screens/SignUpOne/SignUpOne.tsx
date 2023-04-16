import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function SignUpOne() {
  const [ inputEmail, setInputEmail ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ loginBtnIsDisabled, setLoginBtnIsDisabled ] = useState(true);

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
  const navigation = useNavigation();

  const termsNav = () => {
    navigation.navigate('terms');
  }

  const loginNav = () => {
    navigation.navigate('login');
  }

  const continueBtn = () => {
    if(!validateEmail()) {
      Alert.alert('Email inválido', 'Insira um email em formato válido');
    } else if (inputPassword.length < 6) {
      Alert.alert('Senha inválida','Senha deve conter 6 ou mais caracteres');
    } else {
      navigation.navigate('signuptwo');
    }
  }

  return (
    <View style={styles.generalContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/signupone.png')} style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Crie sua conta na PEX!</Text>
        <Text style={styles.text}>Informe o seus dados para criar sua conta na PEX e economizar muito na sua obra</Text>
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
        <Text style={styles.termsText}>
          Li e aceito os<Text style={styles.account2} onPress={ termsNav }> Termos de serviço</Text> e política de privacidade
        </Text>
        <TouchableOpacity 
          style={ loginBtnIsDisabled ? {...styles.btn, backgroundColor: 'gray'} : styles.btn}
          onPress={continueBtn}
        >
          <Text style={styles.btnText}>Continuar</Text>
        </TouchableOpacity>
        <Text style={styles.account}>
          Já possui uma conta?
          <Text style={styles.account2} onPress={ loginNav }> Acessar</Text>
        </Text>
      </View>
    </View>
  );
}

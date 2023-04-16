import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function SignUpOne() {
  const navigation = useNavigation();

  const termsNav = () => {
    navigation.navigate('terms');
  }

  const loginNav = () => {
    navigation.navigate('login');
  }

  const continueBtn = () => {
    navigation.navigate('signuptwo');
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
        />
        <TextInput
          placeholder='Senha'
          style={styles.input}
          textContentType='password'
          placeholderTextColor='#B8B5C3'
          secureTextEntry={true}
        />
        <Text style={styles.termsText}>
          Li e aceito os<Text style={styles.account2} onPress={ termsNav }> Termos de serviço</Text> e política de privacidade
        </Text>
        <TouchableOpacity style={styles.btn} onPress={continueBtn}>
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

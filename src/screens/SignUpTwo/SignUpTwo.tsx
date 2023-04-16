import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

export default function SignUpTwo() {
  const [ inputDate, setInputDate ] = useState('');
  const [ inputPhone, setInputPhone ] = useState('');
  const [ inputName, setInputName ] = useState('');
  const [ loginBtnIsDisabled, setLoginBtnIsDisabled ] = useState(true);

  const navigation = useNavigation();

  const validateInputs = () => {
    if (inputDate.length >= 9 && inputPhone.length >= 20 && inputName.length > 5) {
      setLoginBtnIsDisabled(false);
    } else {
      setLoginBtnIsDisabled(true);
    }
  }

  useEffect(() => {
    validateInputs()
  }, [inputDate, inputPhone, inputName]);

  const nextBtn = () => {
    if (inputName.length < 6) {
      Alert.alert('Nome inválido','Seu nome deve ter no mínimo 6 caracteres');
    } else if(inputDate.length < 9) {
      Alert.alert('Data de nascimento inválida', 'Insira uma data de nascimento válida');
    } else if (inputPhone.length < 20) {
      Alert.alert('Numero de telefone inválido','Insira um numero de telefone válido');
    } else {
      navigation.navigate('faceid');
    }
  }

  const backBtn = () => {
    navigation.navigate('signupone');
  }

  const inputDateChange = (text: string) => {
    if (inputDate.length == 1 || inputDate.length == 4) {
      setInputDate(text + '/');
    } else if (inputDate.length <= 9){
      setInputDate(text);
    }
  }

  const inputPhoneChange = (text: string) => {
    if (inputPhone.length == 0) {
      setInputPhone('+55 (' + text);
    } else if (inputPhone.length == 6) {
      setInputPhone(text + ') ');
    } else if (inputPhone.length == 9) {
      setInputPhone(text + ' ');
    } else if (inputPhone.length == 14) {
      setInputPhone(text + '-');
    } else if (inputPhone.length < 20) setInputPhone(text);

  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={backBtn}>
          <Icon name='arrowleft' size={20} color='black' />
        </TouchableOpacity>
        <Text style={styles.title}>Dados pessoais</Text>
        <TouchableOpacity onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}>
          <Icon name='upload' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <TouchableOpacity 
          style={{alignItems: 'center'}} 
          onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
        >
          <Image 
            source={require('../../assets/sendPhoto.png')} style={styles.image}
            resizeMode='contain'
          />
          <Text style={styles.photoText}>Enviar foto</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Nome completo"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
          value={inputName}
          onChangeText={text => setInputName(text)}
        />
        <TextInput
          placeholder="Data de nascimento"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
          keyboardType='decimal-pad'
          value={inputDate}
          onChangeText={text => inputDateChange(text)}
        />
        <TextInput
          placeholder="+55  |  Telefone"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
          keyboardType='decimal-pad'
          value={inputPhone}
          onChangeText={text => inputPhoneChange(text)}
        />
      </View>
      <View style={styles.btnView}>
      <TouchableOpacity style={styles.btn1} onPress={ () => navigation.navigate('faceid')}>
          <Text style={{ fontWeight: '500'}}>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={ loginBtnIsDisabled ? {...styles.btn, backgroundColor: 'gray'} : styles.btn} 
          onPress={nextBtn}
        >
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

export default function SignUpTwo() {
  const navigation = useNavigation();

  const nextBtn = () => {
    navigation.navigate('faceid');
  }

  const backBtn = () => {
    navigation.navigate('signupone');
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={backBtn}>
          <Icon name='arrowleft' size={20} color='black' />
        </TouchableOpacity>
        <Text style={styles.title}>Dados pessoais</Text>
        <TouchableOpacity>
          <Icon name='upload' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.imageView}>
        <TouchableOpacity style={{alignItems: 'center'}}>
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
        />
        <TextInput
          placeholder="Data de nascimento"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
        />
        <TextInput
          placeholder="+55  |  Telefone"
          style={styles.input}
          textContentType='emailAddress'
          autoComplete='email'
          placeholderTextColor='#B8B5C3'
        />
      </View>
      <View style={styles.btnView}>
      <TouchableOpacity style={styles.btn1} onPress={nextBtn}>
          <Text style={{ fontWeight: '500'}}>Pular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={nextBtn}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

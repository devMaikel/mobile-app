import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';

export default function FaceId() {
  const navigation = useNavigation();

  const backBtn = () => {
    navigation.navigate('signuptwo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={backBtn} >
          <Icon name='arrowleft' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={{fontSize: 18, fontWeight: '500', marginBottom: 8}}>Acesse com seu Face ID</Text>
        <Text style={{fontWeight: '400', color: '#999999'}}>
          Habilite o Face ID para acessar de forma mais fácil e ágil a sua conta da PEX com toda segurança
        </Text>
      </View>
      <Image 
        source={require('../../assets/faceIdImage.png')} style={styles.image}
        resizeMode='contain'
      />
      <TouchableOpacity style={styles.btn} onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}>
        <Text style={styles.btnText}>Habilitar Face ID</Text>
      </TouchableOpacity>
    </View>
  );
}

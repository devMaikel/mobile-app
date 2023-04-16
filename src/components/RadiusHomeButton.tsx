import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

export default function RadiusButton() {
  const navigation = useNavigation();

  const onPress = (): void => {
    navigation.navigate('login');
  }

  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={ onPress }
    >
      <Icon name='arrowright' size={20} color='#FFFFFF' />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F09200',
    width: 62,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
})

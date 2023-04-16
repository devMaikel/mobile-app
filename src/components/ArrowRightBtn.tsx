import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';


export default function ArrowRightBtn() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'white',
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        alignSelf: 'center'
      }}
    >
      <Icon 
        name='arrowright' 
        size={25} 
        color='black'
      />
    </TouchableOpacity>
  )
}

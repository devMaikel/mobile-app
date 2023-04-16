import { View, Text, TouchableOpacity, ScrollView, Image, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function ItemPage1() {
  const window = useWindowDimensions();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={() => navigation.navigate('mainpage')}>
          <Icon name='arrowleft' size={20} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon name='bookmark-border' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false} >
        <Image 
          source={require('../../assets/mainImages/2imageProduct.png')} 
          style={{width: 300, height: 300, borderRadius: 8, marginRight: 8}}
          resizeMode='stretch'
        />
        <Image 
          source={require('../../assets/mainImages/2imageProduct.png')} 
          style={{width: 300, height: 300, borderRadius: 8}}
          resizeMode='stretch'
        />
      </ScrollView>
      <View style={{marginHorizontal: 32, marginTop: 24}}>
        <Text style={{fontSize: 12, fontWeight: '500', color: '#999999'}}>LOUÇAS E METAIS</Text>
        <Text style={{fontSize: 24, fontWeight: '500', marginBottom: 24}}>TORNEIRA HANSGROHE</Text>
        <Text style={{fontSize: 14, fontWeight: '500', marginBottom: 9}}>Informações</Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: '#999999'}}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin.</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Comprar agora</Text>
      </TouchableOpacity>
    </View>
  )
}

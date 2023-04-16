import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const data = [
  {
    key: "1",
    image: require('../assets/mainImages/1Image.png'),
    text1: 'Tudo com frete grátis',
    text2: 'Comprar agora'
  },
  {
    key: "2",
    image: require('../assets/mainImages/4image1.png'),
    text1: 'Lorem Ipsum',
    text2: 'Consequat'
  },
  {
    key: "3",
    image: require('../assets/mainImages/5Image2.png'),
    text1: 'ullamcorper morbi',
    text2: 'sollicitudin'
  },
  {
    key: "4",
    image: require('../assets/mainImages/6Image3.png'),
    text1: 'Augue arcu sit',
    text2: 'eleifend'
  }
]

export default function FlatListComponent() {
  const window = useWindowDimensions();
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      
      style={{height: 200}}
      centerContent={false}
      pagingEnabled={true}
      nestedScrollEnabled={true}
      data={data}
      renderItem={({item, index}) => {
        return (
        <ImageBackground
          source={item.image}
          resizeMode='stretch'
          style={{...styles.backgroundTopImage, width: window.width}}
        >
          <View style={{justifyContent: 'center'}}>
            <Text style={{
              fontSize: 28, 
              fontWeight: '500', 
              color: '#FFFFFF', 
              marginBottom: 24,
              width: 200,
              fontStyle: 'italic'
            }}
            >
              {item.text1}
            </Text>
            <TouchableOpacity
              onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
            >
              <Text style={{
                fontSize: 20, 
                fontWeight: '700', 
                color: '#FFFFFF', 
                textDecorationLine: 'underline'
              }}
              >
                {item.text2}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'center'}}>
            <TouchableOpacity
              style={styles.arrow}
              onPress={() => Alert.alert('Atenção', 'Arraste para exibir o proximo banner.')}
            >
              <Icon 
                name='arrowright' 
                size={25} 
                color='white'
              />
            </TouchableOpacity>
            <Text style={{alignSelf: 'center', color: 'white'}}>Próximo</Text>
          </View>
        </ImageBackground>
        )
      }
      }
      >
      </FlatList>
  )
}

const styles = StyleSheet.create({
  backgroundTopImage: {
    marginBottom: 24, 
    opacity: 0.5, 
    height: 200, 
    backgroundColor: '#16161E',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: 'red',
    alignSelf: 'center'
  },
  arrow: {
    // backgroundColor: 'white',
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    alignSelf: 'center'
  }
});

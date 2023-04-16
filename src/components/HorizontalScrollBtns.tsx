import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface props {
  itens: string[];
}

export function HorizontalScrollBtns(itens: props) {
  const [selectedBtn, setSelectedBtn] = useState('Todas') 
  const titles = itens.itens;

  return (
    <ScrollView 
      horizontal={true} 
      style={styles.categoriasView}
      showsHorizontalScrollIndicator={false}
    >
      {titles.map((title, index) => (
        <TouchableOpacity 
          style={ selectedBtn == title ?
            {...styles.categoriasBtn, backgroundColor: '#7B61FF'}:
            {...styles.categoriasBtn}
          }
          onPress={() => setSelectedBtn(title)}
          key={index}
        >
          <Text 
            style={ selectedBtn == title ?
              {...styles.btnText}:
              {...styles.btnText, color: 'black'}
            }
          >
            {title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoriasView: {
    marginTop: 0,
    marginHorizontal: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 30,
  },
  categoriasBtn: {
    backgroundColor: '#EFEFEF',
    borderRadius: 52,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'center',
    marginHorizontal: 8,
    borderWidth: 0.1,
    borderColor: '#999999'
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  }
});

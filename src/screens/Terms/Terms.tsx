import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { styles } from './styles';


export default function Terms() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigation = useNavigation();

  const acceptBtn = () => {
    navigation.navigate('signupone');
  };

  const scrollRef = useRef<ScrollView>();

  const handleScroll = () => {
    const newPosition = scrollPosition + 250;
    scrollRef.current?.scrollTo({ y: newPosition });
    setScrollPosition(newPosition);
  };

  const setScroll = (event: any) => {
    setScrollPosition(event.nativeEvent.contentOffset.y);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsView}>
        <TouchableOpacity onPress={acceptBtn}>
          <Icon name='arrowleft' size={20} color='black' />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name='upload' size={20} color='black' />
        </TouchableOpacity>
      </View>
      <View style={styles.textView}>
        <Text style={{color: '#999999', fontSize: 12, marginBottom: 8}}>
          Última atualização: Outubro/2022
        </Text>
        <Text style={styles.termsBigText}>
          Termos de uso
        </Text>
        <ScrollView
          ref={scrollRef}
          style={{height: 500}} 
          onScroll={(event) => setScroll(event)}
          // scrollEnabled={false}
        >
          <Text style={styles.termsTitle}>1. Termos</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
          <Text style={styles.termsTitle}>2. Licença de uso</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
          <Text style={styles.termsTitle}>3. Lorem sollicitudin</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
          <Text style={styles.termsTitle}>4. Lorem sollicitudin</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
          <Text style={styles.termsTitle}>5. Lorem sollicitudin</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
          <Text style={styles.termsTitle}>6. Lorem sollicitudin</Text>
          <Text style={styles.termsText}>Consequat, rhoncus quam auctor non fermentum velit. Sapien mauris amet enim ac nibh enim amet. Lectus orci, id vel sollicitudin. Consequat, eleifend sit consequat amet. Ut hac vulputate tortor, tellus sed sapien ut convallis fringilla. Augue arcu sit odio proin cras purus, nisl. Tempor nunc phasellus tortor at interdum nisl. Nisl consequat aliquet ipsum arcu. Nisl, ullamcorper morbi non integer non vulputate.</Text>
        </ScrollView>
        { scrollPosition < 700 && (
          <TouchableOpacity 
            style={styles.button} 
            onPress={ handleScroll }
          >
            <Icon name='arrowdown' size={20} color='#FFFFFF' />
          </TouchableOpacity>
        )}
        { scrollPosition >= 700 && (
          <TouchableOpacity style={styles.acceptBtn} onPress={acceptBtn}>
            <Text style={styles.btnText}>Concordo com os termos</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

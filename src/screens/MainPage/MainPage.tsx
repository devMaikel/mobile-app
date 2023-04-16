import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import ArrowRightBtn from '../../components/ArrowRightBtn';
import FlatListComponent from '../../components/FlatListComponent';
import { HorizontalScrollBtns } from '../../components/HorizontalScrollBtns';
import { styles } from './styles';

export default function MainPage() {
  const navigation = useNavigation();

  const categories = ['Todas', 'Ofertas', 'Pisos e porcelanatos', 'Lorem ipsum', 'Consequat']

  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image 
          source={require('../../assets/mainImages/logo.png')} style={styles.logo}
          resizeMode='contain'
        />
        <TouchableOpacity onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}>
          <Icon name='shoppingcart' size={25} color='black' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}>
          <Icon name='bells' size={25} color='black' />
        </TouchableOpacity>        
      </View>
      <View>
        <FlatListComponent/>
        <Text style={{ fontWeight: '500', alignSelf: 'center', fontSize: 18, marginTop: 24}}>Categorias</Text>
        <HorizontalScrollBtns itens={categories} />
        <Text style={{ fontWeight: '500', alignSelf: 'flex-start', fontSize: 18, marginLeft: 32}}>Produtos populares</Text>
        <ScrollView 
          horizontal={true} 
          style={{margin: 19, marginBottom: 0}}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.productCard}>
            <Image 
              source={require('../../assets/mainImages/2imageProduct.png')} 
              style={{width: 125, height: 108, borderRadius: 8}}
              resizeMode='contain'
            />
            <Text 
              style={{fontWeight: '400', fontSize: 12, color: '#999999', alignSelf: 'flex-start'}}
            >
              Louças e metais
            </Text>
            <Text 
              style={{fontWeight: '500', fontSize: 12, color: 'black', alignSelf: 'flex-start'}}
            >
              Torneira Puravida Hansgrohe
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('itempage1')}>
              <Text style={styles.btnText2}>Comprar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCard}>
            <Image 
              source={require('../../assets/mainImages/4image1.png')} 
              style={{width: 125, height: 108, borderRadius: 8}}
              resizeMode='contain'
            />
            <Text 
              style={{fontWeight: '400', fontSize: 12, color: '#999999', alignSelf: 'flex-start'}}
            >
              Pisos e porcelanato
            </Text>
            <Text 
              style={{fontWeight: '500', fontSize: 12, color: 'black', alignSelf: 'flex-start'}}
            >
              Portobello Mont blanc Natural 90x...
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('itempage2')}>
              <Text style={styles.btnText2}>Comprar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCard}>
            <Image 
              source={require('../../assets/mainImages/2imageProduct.png')} 
              style={{width: 125, height: 108, borderRadius: 8}}
              resizeMode='contain'
            />
            <Text 
              style={{fontWeight: '400', fontSize: 12, color: '#999999', alignSelf: 'flex-start'}}
            >
              Louças e metais
            </Text>
            <Text 
              style={{fontWeight: '500', fontSize: 12, color: 'black', alignSelf: 'flex-start'}}
            >
              Torneira Puravida Hansgrohe
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('itempage1')}>
              <Text style={styles.btnText2}>Comprar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.productCard}>
            <Image 
              source={require('../../assets/mainImages/4image1.png')} 
              style={{width: 125, height: 108, borderRadius: 8}}
              resizeMode='contain'
            />
            <Text 
              style={{fontWeight: '400', fontSize: 12, color: '#999999', alignSelf: 'flex-start'}}
            >
              Pisos e porcelanato
            </Text>
            <Text 
              style={{fontWeight: '500', fontSize: 12, color: 'black', alignSelf: 'flex-start'}}
            >
              Portobello Mont blanc Natural 90x...
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('itempage2')}>
              <Text style={styles.btnText2}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ScrollView
          horizontal={true}
          style={styles.horizontalImages}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.scrolImage} onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')} >
            <Image 
              source={require('../../assets/mainImages/brandlist/image01.png')}
              resizeMode='stretch'
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.scrolImage}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')} 
          >
            <Image 
              source={require('../../assets/mainImages/brandlist/image02.png')}
              resizeMode='stretch'
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.scrolImage}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')} 
          >
            <Image 
              source={require('../../assets/mainImages/brandlist/image03.png')}
              resizeMode='stretch'
              style={{}}
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.scrolImage}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')} 
          >
            <Image 
              source={require('../../assets/mainImages/brandlist/image04.png')}
              resizeMode='stretch'
              style={{}}
            />
          </TouchableOpacity>

        </ScrollView>
        <ImageBackground 
          source={require('../../assets/mainImages/4image1.png')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        >
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 27, fontWeight: '900', color: '#FFFFFF'}}>LANÇAMENTOS</Text>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#FFFFFF'}}>SUPER OFERTAS</Text>
          </View>
          <ArrowRightBtn/>
        </ImageBackground>
        <ImageBackground 
          source={require('../../assets/mainImages/5Image2.png')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        >
          <View style={{justifyContent: 'center'}}>
            <Text 
              style={{fontSize: 14, fontWeight: '900', color: '#FFFFFF', backgroundColor: 'white', width: 135}}
            >
              SEMANA ESPECIAL
            </Text>
            <Text style={{fontSize: 27, fontWeight: '900', color: '#FFFFFF'}}>COZINHA ATÉ 80% OFF</Text>
          </View>
          <ArrowRightBtn/>
        </ImageBackground>
        <ImageBackground 
          source={require('../../assets/mainImages/6Image3.png')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        >
          <View style={{justifyContent: 'center'}}>
            <Text 
              style={{fontSize: 14, fontWeight: '900', color: '#FFFFFF', backgroundColor: 'white', width: 60}}
            >
              50% Off
            </Text>
            <Text style={{fontSize: 27, fontWeight: '900', color: '#FFFFFF'}}>TODAS AS TINTAS</Text>
            <Text style={{fontSize: 27, fontWeight: '900', color: '#FFFFFF'}}>COLEÇÃO OUTONO</Text>
          </View>
          <ArrowRightBtn/>
        </ImageBackground>
        <View style={styles.footer}>
          <TouchableOpacity 
            style={{alignItems: 'center'}}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
          >
            <Icon name='shoppingcart' size={25} color='#7B61FF' />
            <Text style={{color: '#7B61FF'}}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{alignItems: 'center'}}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
          >
            <MaterialIcon name='category' size={25} color='black' />
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{alignItems: 'center'}}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
          >
            <MaterialIcon name='bookmark-border' size={25} color='black' />
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={{alignItems: 'center'}}
            onPress={() => Alert.alert('Não implementado', 'Funcionalidade ainda não implementada.')}
          >
            <Icon name='user' size={25} color='black' />
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

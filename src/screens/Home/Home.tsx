import { Button, Image, StyleSheet, Text, View } from 'react-native';
import RadiusButton from '../../components/RadiusHomeButton';
import { styles } from './styles';


export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Frame.png')} style={styles.logo} />
      <Text style={styles.title}>Bem vindo a PEX</Text>
      <Text style={styles.subTitle}>Economize tempo e dinheiro em todas as etapas da sua obra. Na reforma ou construção nós iremos te auxiliar em tudo.</Text>
      <View style={styles.buttonView}>
        <RadiusButton />
        <Text>Continuar</Text>
      </View>
    </View>
  );
}

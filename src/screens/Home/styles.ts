import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 100,
    width: 224,
    height: 121,
    marginTop: 150
  },
  title: {
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 41,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#999999',
    paddingHorizontal: 32,
    paddingBottom: 111,
    paddingTop: 16,    
  },
  buttonView: {
    alignSelf: 'flex-end',
    paddingHorizontal: 32
  }
});


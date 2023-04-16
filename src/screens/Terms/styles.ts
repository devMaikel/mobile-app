import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconsView: {
    marginTop: 70,
    marginHorizontal: 36,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45
  },
  textView: {
    marginHorizontal: 32,
  },
  termsBigText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 32
  },
  termsTitle: {
    fontSize: 14,
    fontWeight: '500'
  },
  termsText: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#F09200',
    width: 62,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    alignSelf: 'center'
  },
  acceptBtn: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    width: 250,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  }
});

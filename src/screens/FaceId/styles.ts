import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    // height: '100%'
    alignSelf: 'center'
  },
  iconsView: {
    flex: 1,
    marginTop: 70,
    marginLeft: 36
  },
  textView: {
    marginTop: 45,
    marginHorizontal: 25
  },
  image: {
    alignSelf: 'center',
    marginTop: 140
  },
  btn: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    width: 282,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'center',
    marginTop: 60
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

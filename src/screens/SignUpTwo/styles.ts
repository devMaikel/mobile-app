import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    height: '100%'
  },
  iconsView: {
    marginTop: 70,
    marginHorizontal: 36,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45
  },
  title: {
    fontSize: 14,
    fontWeight: '500'
  },
  imageView: {
    alignItems: 'center'
  },
  image: {
    alignSelf: 'center'
  },
  photoText: {
    marginTop: 16,
    color: '#F09200',
    fontSize: 14,
    fontWeight: '500'
  },
  inputsContainer: {
    flex: 1,
    paddingStart: '10%',
    paddingEnd: '10%',
    marginTop: 40
  },
  input: {
    height: 40,
    width: 311,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#F8F8F9',
    paddingHorizontal: 18,
  },
  btnView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 33,
    marginTop: 80,
  },
  btn: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    width: 151,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btn1: {
    backgroundColor: '#F8F8F9',
    borderRadius: 12,
    width: 151,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500'
  },
});

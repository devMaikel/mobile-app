import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    marginTop: 70,
    marginHorizontal: 36,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 45,
    alignItems: 'center'
  },
  logo: {
    marginRight: 115,
    width: 94,
    height: 44
  },
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
  scrollView: {
    flex: 1,
  },
  categoriasView: {
    marginTop: 0,
    marginHorizontal: 15,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 45,
  },
  categoriasBtn: {
    backgroundColor: '#7B61FF',
    borderRadius: 52,
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'center',
    marginHorizontal: 8
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14
  },
  productCard: {
    borderWidth: 1,
    borderColor: '#F1F9F3',
    height: 223,
    width: 141,
    padding: 8,
    alignItems: 'center',
    borderRadius: 12,
  },
  btn: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    width: 125,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 24,
    alignSelf: 'center',
    marginTop: 8
  },
  btnText2: {
    color: 'white',
    fontSize: 8,
    fontWeight: '500',
  },
  horizontalImages: {
    paddingRight: 32,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: 30,
    paddingVertical: 32
  },
  scrolImage: {
    marginHorizontal: 32
  },
  backgroundImage: {
    marginBottom: 2, 
    opacity: 0.4, 
    height: 146, 
    backgroundColor: '#16161E',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  footer: {
    marginTop: 32,
    marginHorizontal: 88,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 56,
    alignItems: 'center',
    
  }
});

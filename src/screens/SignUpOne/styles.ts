import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    marginTop: 30
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  image: {
    width: '100%',
    height: 299,
  },
  textContainer: {
    flex: 1,
    paddingStart: '10%',
    paddingEnd: '10%',
    position: "absolute",
    marginTop: 323
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '500',
    color: '#000000'
  },
  text: {
    fontSize: 14,
    marginBottom: 32,
    fontWeight: '400',
    color: '#999999'
  },
  input: {
    height: 40,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#F8F8F9',
    paddingHorizontal: 18,
  },
  termsText: {
    alignSelf: 'center',
    fontWeight: '500',
    color: '#999999',
    marginTop: 8
  },
  btn: {
    backgroundColor: '#F09200',
    borderRadius: 12,
    marginTop: 30,
    width: 282,
    height: 62,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    alignSelf: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500'
  },
  account: {
    color: '#999999',
    fontSize: 14,
    fontWeight: '400',
    alignSelf: 'center'
  },
  account2: {
    color: '#F09200'
  },
});

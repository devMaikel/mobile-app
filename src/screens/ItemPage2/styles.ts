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
  scrollView: {
    marginHorizontal: 36,
    maxHeight: 310,
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

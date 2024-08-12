import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Nunito400 } from '../../constants/fonts';

const styles = StyleSheet.create({
  wrapperButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 24
  },
  button: {
    paddingVertical: 12,
    width: 140,
    borderRadius: 24,
  },
  textButton: {
    fontSize: RFValue(18, 812),
    fontFamily: Nunito400,
    textAlign: 'center'
  },
});

export default styles;

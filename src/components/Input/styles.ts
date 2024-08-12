import {StyleSheet} from 'react-native';
import {redColor, grayLightColor, whiteColor} from '../../constants/colors';
import {Nunito400, Nunito600} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const useStyles = StyleSheet.create({
    input: {
      width: '100%',
      fontSize: RFValue(16, 812),
      paddingHorizontal: 16,
      height: 56,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: grayLightColor,
      borderRadius: 4,
      fontFamily: Nunito400,
    },
    errorText: {
      paddingHorizontal: 16, 
      color: redColor,
      fontSize: RFValue(12,812),
      fontFamily: Nunito400,
      marginTop: 4
    },
    lableText: {
      fontSize: RFValue(12, 812),
      position: 'absolute',
      top: 4,
      left: 16
    }
  });

export default useStyles;

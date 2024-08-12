import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Nunito400 } from '../../constants/fonts';
import { blackColor, grayColor, grayLightColor, whiteColor } from '../../constants/colors';

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 24,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: whiteColor
  },
  wrapperImage: {
    marginRight: 16,
  },
  photoUser: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  wrapperInfoUser: {
    flex: 1,
    borderBottomColor: grayLightColor,
    borderBottomWidth: 1
  },
  nameUser: {
    fontSize: RFValue(18, 812),
    fontFamily: Nunito400,
    marginBottom: 4,
    color: blackColor
  },
  positionUser: {
    fontSize: RFValue(14, 812),
    fontFamily: Nunito400,
    marginBottom: 8,
    color: blackColor
  },
  emailUser: {
    fontSize: RFValue(14, 812),
    fontFamily: Nunito400,
    marginBottom: 4,
    color: grayColor
  },
  phoneUser: {
    fontSize: RFValue(14, 812),
    fontFamily: Nunito400,
    color: blackColor,
    marginBottom: 24
  },
});

export default styles;

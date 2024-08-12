import { StyleSheet } from "react-native";
import { blackColor, grayColor, grayLightColor, redColor, tintColor, whiteColor } from "../../../constants/colors";
import { Nunito400, Nunito600 } from "../../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerContent: {
    flex: 1,
    paddingHorizontal: 16,
  backgroundColor: whiteColor
  },
  inputMargin: {
    marginTop: 32
  },
  lablestyle: {
    fontSize: RFValue(16, 812), 
    fontFamily: Nunito400, 
    color: blackColor,
    marginLeft: 20
  },
  containerStyle: {
    paddingVertical: 12
  },
  phoneExampleText: {
    color: grayColor, 
    paddingHorizontal: 16, 
    marginTop: 4, 
    fontSize: RFValue(16, 812),
    fontFamily: Nunito400
  },
  selectPosition: {
    fontSize: RFValue(18,812),
    fontFamily: Nunito400,
    color: blackColor,
    marginTop: 24,
    marginBottom: 12
  },
  uploadPhotoWrapper: {
    height: 56, 
    borderWidth: 1, 
    borderRadius: 4,
    marginTop: 24,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  uploadPhotoButton: {
    color: tintColor,
    fontSize: RFValue(16, 812),
    fontFamily: Nunito600,
    fontWeight: '600',
    marginRight: 8
  },
  photoRequired: {
    fontSize: RFValue(12, 812),
    fontFamily: Nunito400,
    color: redColor,
    paddingTop: 4,
    paddingHorizontal: 16
  }
});

export default styles;
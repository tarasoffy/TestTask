import { StyleSheet } from "react-native";
import { blackColor, yellowColor } from "../../constants/colors";
import { Nunito400 } from "../../constants/fonts";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: yellowColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: RFValue(20, 812),
    fontFamily: Nunito400,
    color: blackColor
  }
});

export default styles
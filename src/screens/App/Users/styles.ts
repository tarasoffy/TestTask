import { StyleSheet } from "react-native";
import { blackColor, whiteColor } from "../../../constants/colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Nunito400 } from "../../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: whiteColor
  },
  noUserImage: {
    alignSelf: 'center',
  },
  noUserText: {
    color: blackColor,
    fontSize: RFValue(20, 812),
    fontFamily: Nunito400,
    textAlign: 'center',
    marginTop: 24
  }
});

export default styles
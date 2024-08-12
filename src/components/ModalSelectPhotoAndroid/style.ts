import {StyleSheet} from 'react-native';
import { whiteColor, blackColor, grayColor } from '../../constants/colors';
import {Nunito400} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
        zIndex: 999,
    },
    conteiner: {
        backgroundColor: whiteColor,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingBottom: 40,
        paddingTop: 16,
        paddingHorizontal: 30,
    },
    topDash: {
        backgroundColor: grayColor, 
        height: 4, 
        borderRadius: 100, 
        width: 32, 
        alignSelf: 'center', 
        marginBottom: 16
    },
    title: {
        fontSize: RFValue(16,812),
        color: grayColor,
        fontFamily: Nunito400,
        textAlign: 'center'
    },
    button: {
        alignItems: 'center' 
    },
    textButton: {
        marginTop: 12,
        fontSize: RFValue(16, 812),
        fontFamily: Nunito400
    }
  });

export default styles;

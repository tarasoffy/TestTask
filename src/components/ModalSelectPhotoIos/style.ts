import {StyleSheet} from 'react-native';
import { whiteColor, blackColor, grayColor, whiteOpacity, grayLightColor, blueColor } from '../../constants/colors';
import {Nunito400, Nunito600} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
        paddingHorizontal: 8,
        marginBottom: 34,
    },
    modalContent: {
        width: '100%',
        backgroundColor: whiteOpacity,
        borderRadius: 14
    },
    wrapperTitle: {
        justifyContent: 'center',
        height: 44
    },
    textTitle: {
        fontSize: RFValue(13,812),
        color: grayColor,
        fontFamily: Nunito600,
        fontWeight: '600',
        textAlign: 'center'
    },
    wrapperButton: {
        height: 56,
        borderTopWidth: 1,
        borderTopColor: grayLightColor,
    },
    option: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    optionText: {
        textAlign: 'center',
        fontSize: RFValue(17, 812),
        fontFamily: Nunito400,
        color: blueColor,
    },
    cancel: {
        backgroundColor: whiteColor,
        borderRadius: 14,
        marginTop: 8,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    cancelText: {
        fontSize: RFValue(18, 812),
        fontFamily: Nunito600,
        fontWeight: '600',
        color: blueColor,
        textAlign: 'center',
  },
  });

export default styles;

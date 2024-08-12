import {StyleSheet} from 'react-native';
import { whiteColor, blackColor } from '../../constants/colors';
import {Nunito400} from '../../constants/fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        margin: 0,
        paddingHorizontal: 8,
        marginBottom: 34,
        backgroundColor: whiteColor,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    conteiner: {
        width: '100%',
        alignItems: 'flex-end',
        padding: 24
    },
    contentConteiner: {
        alignItems: 'center'
    }, 
    image: {
        width: 200, 
        height: 200
    },
    textInfo: {
        color: blackColor,
        fontSize: RFValue(24, 812),
        fontFamily: Nunito400,
        marginVertical: 24
    }
  });

export default styles;

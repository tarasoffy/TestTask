import React, { Dispatch, FC, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { blackColor } from '../../constants/colors';
import CloseIcon from '../../assets/images/icons/close.svg'
import Button from '../Button';
import styles from './style';

interface ModalInterface {
  isVisible: null | string | boolean;
  setModalVisible: Dispatch<SetStateAction<null | string | boolean>>;
  textInfo: string;
  textButton: string;
  colorButton: string;
  image: number;
}

const ModalInfo: FC<ModalInterface> = ({
  isVisible, 
  setModalVisible, 
  textInfo,
  textButton,
  colorButton,
  image
}) => {

return (
  <Modal
    isVisible={!!isVisible}
    style={styles.modal}
    backdropColor={blackColor}
    animationIn="fadeInLeft"
    animationInTiming={500}
    backdropOpacity={0}>
      <View style={styles.conteiner}>
        <TouchableOpacity
          onPress={() => setModalVisible(null)}
        >
          <CloseIcon width={20} height={20}/>
        </TouchableOpacity>
      </View>
      <View style={styles.contentConteiner}>
        <Image source={image} style={styles.image}/>
        <Text style={styles.textInfo}>{textInfo}</Text>
        <Button backgroundcolor={colorButton} text={textButton} onPress={() => setModalVisible(null)}/>
      </View>
      <View></View>
    </Modal>
  );
};

export default ModalInfo;

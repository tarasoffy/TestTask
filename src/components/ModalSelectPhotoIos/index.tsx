import React, { Dispatch, FC, SetStateAction } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { blackColor } from '../../constants/colors';
import { BlurView } from '@react-native-community/blur';
import styles from './style';

interface ModalInterface {
  isVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  openCamera: () => void;
  openLibrary: () => void;
}

const ModalSelectPhotoIos: FC<ModalInterface>  = ({isVisible, setModalVisible, openCamera, openLibrary}) => {

  const toggleModal = () => {
    setModalVisible(!isVisible);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      style={styles.modal}
      backdropColor={blackColor}
      backdropOpacity={0.2}>
        <BlurView 
          style={styles.modalContent}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white">
            <View style={styles.wrapperTitle}>
            <Text style={styles.textTitle}>Choose how you want to add a photo</Text>
          </View>
          <View style={styles.wrapperButton}>
            <TouchableOpacity style={styles.option} onPress={() => {
              openCamera();
            }}>
              <Text style={styles.optionText}>Take Photo</Text>
            </TouchableOpacity>
          </View>
            <View style={styles.wrapperButton}>
            <TouchableOpacity style={styles.option} onPress={() => {
              openLibrary();
            }}>
            <Text style={styles.optionText}>Choose from Library</Text>
          </TouchableOpacity>
          </View>
        </BlurView>
        <TouchableOpacity style={styles.cancel} onPress={toggleModal}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
    </Modal>
  );
};

export default ModalSelectPhotoIos;

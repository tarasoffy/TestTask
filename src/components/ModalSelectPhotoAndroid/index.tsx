import React, { Dispatch, FC, SetStateAction } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import { grayColor } from '../../constants/colors';
import CameraAndroidImage from '../../assets/images/app/Camera.png';
import GalleryAndroidImage from '../../assets/images/app/Gallery.png'
import styles from './style';

interface ModalInterface {
  isVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  openCamera: () => void;
  openLibrary: () => void;
}

const ModalSelectPhotoAndroid: FC<ModalInterface>  = ({isVisible, setModalVisible, openCamera, openLibrary}) => {

  const toggleModal = () => {
    setModalVisible(!isVisible);
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      onSwipeComplete={toggleModal}
      coverScreen
      useNativeDriver={false}
      propagateSwipe={true}
      backdropColor={grayColor}
      animationOutTiming={500}
      backdropOpacity={0.8}
      style={styles.modal}
      swipeDirection={['down']}>
       <View style={styles.conteiner}>
        <View style={styles.topDash} />
        <Text style={styles.title}>Choose how you want to add a photo</Text>
        <View style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginTop: 32
        }}>
          <TouchableOpacity style={styles.button} onPress={() => openCamera()}>
            <Image source={CameraAndroidImage}/>
            <Text style={styles.textButton}>Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => openLibrary()}>
            <Image source={GalleryAndroidImage}/>
            <Text style={styles.textButton}>Gallery</Text>
          </TouchableOpacity>
        </View>
       </View>
    </Modal>
  );
};

export default ModalSelectPhotoAndroid;

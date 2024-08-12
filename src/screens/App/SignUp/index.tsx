import React, { useEffect, useState } from 'react';
import {Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Input from '../../../components/Input';
import { grayColor, grayLightColor, redColor, tintColor, whiteColor, yellowColor } from '../../../constants/colors';
import { isEmailValid, isOnlyNumbers } from '../../../helpers/regExpValidators';
import RadioGroup from 'react-native-radio-buttons-group';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import {PERMISSIONS, Permission, PermissionStatus, RESULTS, check, request} from 'react-native-permissions';
import { isAndroid, isIos } from '../../../constants/common';
import ModalSelectPhotoIos from '../../../components/ModalSelectPhotoIos';
import Button from '../../../components/Button';
import ModalInfo from '../../../components/ModalInfo';
import SuccessImage from '../../../assets/images/app/success-image.png';
import ErrorImage from '../../../assets/images/app/error-image.png'
import ModalSelectPhotoAndroid from '../../../components/ModalSelectPhotoAndroid';

const url = 'https://frontend-test-assignment-api.abz.agency/api/v1';

function SignUp(): React.JSX.Element {

  const [textInputName, setTextInputName] = useState<string>('');
  const [textInputEmail, setTextInputEmail] = useState<string>('');
  const [textInputPhone, setTextInputPhone] = useState<string>('');
  const [image, setImage] = useState<string | undefined>(undefined);

  const [errorInputName, setErrorInputName] = useState<boolean>(false);
  const [errorInputEmail, setErrorInputEmail] = useState<string | null>(null);
  const [errorInputPhone, setErrorInputPhone] = useState<string | null>(null);
  const [errorImage, setErrorImage] = useState<boolean | string>(false);

  const [selectedId, setSelectedId] = useState<string>('1');
  const [focusedId, setFocusedId] = useState<string | null>('1');

  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [isVisbleModalInfo, setIsVisibleModalInfo] = useState<string | null | boolean>(null);

  const [positions, setPositions] = useState<any[]>([]);

  const getPositions = async () => {
    const response = await fetch(`${url}/positions`);
    const data = await response.json();
    if (data.success && data.positions) {
      const transformedPositions = data.positions.map((position: { id: number, name: string }) => ({
        id: position.id.toString(),
        label: position.name,
        value: position.name,
        borderColor: focusedId === position.id.toString() ? tintColor : grayLightColor,
        borderSize: focusedId === position.id.toString() ? 6 : 1,
        color: whiteColor,
        labelStyle: styles.lablestyle,
        containerStyle: styles.containerStyle,
      }));
      setPositions(transformedPositions);
    }
  };

  useEffect(() => {
    getPositions();
  }, [focusedId]);

  const handleFocus = (id: string) => {
    setFocusedId(id);
  };

  const handleBlur = () => {
    setFocusedId(null);
  };

  useEffect(() => {
    setErrorInputName(false);
  },[textInputName]);

  useEffect(() => {
    setErrorInputEmail(null);
  },[textInputEmail]);

  useEffect(() => {
    setErrorInputPhone(null);
  },[textInputPhone]);

  const handleOnBlurIsEmptyField = (fieldCheck: string) => {
    switch (fieldCheck) {
      case 'name':
        setErrorInputName(!textInputName);
        break;
      case 'email':
        setErrorInputEmail(!textInputEmail ? 'Required field' : null);
        break;
      case 'phone':
        setErrorInputPhone(!textInputPhone ? 'Required field' : null);
        break;
      case 'image':
        setErrorImage(!image);
        break;
      default:
        break;
    }
  };

  const handleOnBlurEmail = () => {
    handleOnBlurIsEmptyField('email');
    const isValid = isEmailValid(textInputEmail);
    if (textInputEmail && !isValid) {
      setErrorInputEmail('Invalid email format');
    }
  };

  const handleOnBlurNumericOnly = () => {
    handleOnBlurIsEmptyField('phone');
    const isValid = isOnlyNumbers(textInputPhone);
    if (textInputPhone && !isValid) {
      setErrorInputPhone('Invalid phone number format');
    }
  };

  const makePermissionsRequest = async (permission: Permission): Promise<PermissionStatus> => {
    const result = await check(permission);
    switch (result) {
      case RESULTS.DENIED:
        const requestResult = await request(permission);
        if (requestResult === RESULTS.BLOCKED) {
          Alert.alert('Permission not granted');
        }
        return requestResult;
      case RESULTS.BLOCKED:
        Alert.alert('Permission not granted');
        break;
    }
    return result;
  };

  const getPhotoFromLibrary = () => {
    try {
      launchImageLibrary({ mediaType: 'photo' }, (response) => {        
        if (response.assets && response.assets.length > 0) {
          const image = response.assets[0].uri;
          setImage(image);
        }
      }).then(() => setModalVisible(false))
    } catch (error) {
      
    }
  }
  
  const handleChoosePhotoFromLibrary = async () => {
    if(isIos) {
      const photoLibraryPermission = await makePermissionsRequest(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (photoLibraryPermission !== RESULTS.GRANTED && photoLibraryPermission !== RESULTS.LIMITED) {
      return;
    } else getPhotoFromLibrary()
    } else getPhotoFromLibrary()
  };

  const getPhotoFromCamera = async () => {    
    await launchCamera(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.errorCode === 'camera_unavailable') {
          setModalVisible(false)
          return Alert.alert('Camera is not available');
        }

        if (response.errorCode === 'permission') {
          setModalVisible(false)
          return Alert.alert('Permission not granted');
        }
        if (response.assets) {
          const image = response.assets[0].uri
          setImage(image);
          setModalVisible(false)
        }
      },
    );
  }

  const openCamera = async () => {
    const cameraPermission = await request(isIos? PERMISSIONS.IOS.CAMERA: PERMISSIONS.ANDROID.CAMERA);
    if (cameraPermission === RESULTS.GRANTED) {
      getPhotoFromCamera()
    } else {
      Alert.alert('Camera permission not granted');
    }
  };

  const modalInfo = [
  <ModalInfo 
    isVisible={isVisbleModalInfo} 
    setModalVisible={setIsVisibleModalInfo} 
    textInfo='User successfully registered'
    textButton='Got it'
    colorButton={yellowColor}
    image={SuccessImage}
  />,
  <ModalInfo 
    isVisible={isVisbleModalInfo} 
    setModalVisible={setIsVisibleModalInfo} 
    textInfo='That email is already registered'
    textButton='Try again'
    colorButton={yellowColor}
    image={ErrorImage}
  />
  ]

  const getTokenRegistration = async () => {
    const getToken = await fetch(`${url}/token`);
    const {token} = await getToken.json();
    return token;
  }

  const isFileSizeValid = async (uri: string) => {
    const getFileSize = async (uri: string) => {
      const response = await fetch(uri);
      const blob = await response.blob();
      return blob.size;
    };
    const fileSize = await getFileSize(uri);
    return fileSize <= 5 * 1024 * 1024;
  };
  
  const registrationUser = async () => {
    try {
      if (image && !(await isFileSizeValid(image))) {
        setErrorImage('Image size exceeds 5MB');
        return;
      }

      const token = await getTokenRegistration();
  
      const formData = new FormData();
      formData.append('name', textInputName);
      formData.append('email', textInputEmail.toLocaleLowerCase());
      formData.append('phone', textInputPhone);
      formData.append('position_id', selectedId);
      
      if (image) {
        formData.append('photo', {
          uri: image,
          name: 'photo.jpg',
          type: 'image/jpeg',
        });
      }
  
      const response = await fetch(`${url}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Token': token,
        },
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.success) {
        setIsVisibleModalInfo('success')
        Alert.alert('Регистрация успешна');
      } else {     
        if(data.message === 'User with this phone or email already exist') setIsVisibleModalInfo('error');
      }
    } catch (error) {

    }
  };

  const handleSignUp = () => {
    const fieldName =  ['name', 'email', 'phone', 'image'];
    fieldName.forEach(item => {
      handleOnBlurIsEmptyField(item);
    });
    if (!errorInputName && !errorInputEmail && !errorInputPhone && !errorImage &&
      textInputName && textInputEmail && textInputPhone && image) {
        registrationUser()
    } else {
      Alert.alert('Some fields are missing or have errors')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1, backgroundColor: whiteColor}}>
      <View style={styles.containerContent}>
        <Input
          value={textInputName}
          onBlur={() => handleOnBlurIsEmptyField('name')}
          onChange={setTextInputName} 
          isError={errorInputName} 
          placeholderTextColor={errorInputName ? redColor : undefined}
          errorText='Required field' 
          placeholder='Your name' 
          label='Name' 
          containerStyle={[styles.inputMargin]}
        />
        <Input 
          value={textInputEmail}
          onBlur={handleOnBlurEmail}
          onChange={setTextInputEmail} 
          isError={!!errorInputEmail} 
          placeholderTextColor={errorInputEmail ? redColor : undefined}
          errorText={errorInputEmail || ''} 
          placeholder='Email' 
          label='Email' 
          keyboardType='email-address' 
          containerStyle={styles.inputMargin}
        />
        <Input 
          value={textInputPhone}
          onBlur={handleOnBlurNumericOnly}
          onChange={setTextInputPhone} 
          isError={!!errorInputPhone} 
          placeholderTextColor={errorInputPhone ? redColor : undefined}
          errorText={errorInputPhone || ''} 
          placeholder='Phone' 
          label='Phone' 
          containerStyle={styles.inputMargin}
        /> 
        {!errorInputPhone && <Text style={styles.phoneExampleText}>+38 (XXX) XXX - XX - XX</Text>}
        <Text style={styles.selectPosition}>Select your position</Text>
        <RadioGroup 
          radioButtons={positions} 
          onPress={(id) => {
            handleBlur()
            setSelectedId(id);
            handleFocus(id);
          }}
          selectedId={selectedId}
          containerStyle={{alignItems: 'flex-start'}}
        />
        <View style={[styles.uploadPhotoWrapper, {borderColor: errorImage? redColor: grayLightColor}]}>
          <Text style={[styles.phoneExampleText, {marginTop: 0, paddingHorizontal: 0, color: errorImage? redColor: grayColor}]}>Upload your photo</Text>
          <TouchableOpacity onPress={() => {
            setModalVisible(true)
            setErrorImage(false)
          }}>
            <Text style={styles.uploadPhotoButton}>Upload</Text>
          </TouchableOpacity>
        </View>
        {errorImage && <Text style={[styles.photoRequired]}>Photo is required</Text>}
        <Button 
          text='Sign up' 
          backgroundcolor={!textInputEmail && !textInputName && !textInputPhone? grayLightColor: yellowColor} 
          colorText={grayColor} 
          disabled={!textInputEmail && !textInputName && !textInputPhone}
          onPress={handleSignUp}
          />
      </View>
      </ScrollView>
      {isAndroid?<ModalSelectPhotoAndroid 
        isVisible={isModalVisible} 
        setModalVisible={setModalVisible}
        openCamera={openCamera}
        openLibrary={handleChoosePhotoFromLibrary}
      />: <ModalSelectPhotoIos 
        isVisible={isModalVisible} 
        setModalVisible={setModalVisible}
        openCamera={openCamera}
        openLibrary={handleChoosePhotoFromLibrary}
      />}
      {isVisbleModalInfo === 'success'&& modalInfo[0]}
      {isVisbleModalInfo === 'error'&& modalInfo[1]}
    </SafeAreaView>
  );
}

export default SignUp;

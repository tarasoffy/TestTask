import React, { Dispatch, SetStateAction } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles'

interface ButtonProps {
  backgroundcolor: string;
  text: string;
  colorText?: string;
  disabled?: boolean;
  onPress: () => void;
}

function Button({backgroundcolor, text, colorText, disabled, onPress}: ButtonProps): React.JSX.Element {
  return (
    <View style={styles.wrapperButton}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[styles.button, {backgroundColor: backgroundcolor}]}>
        <Text style={[styles.textButton, {color: colorText}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

import { KeyboardTypeOptions, StyleProp, Text, TextInput, TouchableOpacity, ViewStyle } from 'react-native';
import { FC, useRef, useState } from 'react';
import { redColor, grayLightColor, grayColor, tintColor } from '../../constants/colors';
import styles from './styles';

export interface InputProps {
  value: string | undefined;
  label?: string | undefined;
  placeholder?: string | undefined;
  isError?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (val: string) => void;
  onBlur?: () => void;
  onPressFocus?: () => void;
  errorText?: string | undefined;
  placeholderTextColor?: string | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
}

const Input: FC<InputProps> = ({
  errorText,
  onChange,
  onBlur,
  onPressFocus,
  containerStyle,
  isError = false,
  placeholder,
  placeholderTextColor = grayLightColor,
  value,
  label,
  keyboardType = 'default',
}) => {
  const inputRef = useRef<TextInput>(null);

  const [focus, setFocus] = useState(false);  

  const handleOnChange = (text: string): void => {
    onChange(text);
  };

  const handleOnFocus = (): void => {
    setFocus(true);
  };

  const handleOnBlur = (): void => {
    setFocus(false);
    onBlur && onBlur();
  };

  const onPress = (): void => {
    onPressFocus && onPressFocus();
    inputRef.current?.focus();
  };

  const colorLable = () => {
    if(focus && !value && !isError) {
      return tintColor
    }
    if(isError) {
      return redColor
    }

    if(value && !isError) {
      return grayColor
    }
  }

  const colorBorder = () => {
    if(focus && !isError) {
      return tintColor
    }
    if(isError) {
      return redColor
    }

    if(!focus && !isError) {
      return grayLightColor
    }
  }

  return (
    <TouchableOpacity onPress={onPress} style={[containerStyle]}>
      {focus || value ?<Text style={[{
        color: colorLable(),
      }, styles.lableText]}>{label}</Text> : null}
      <TextInput 
        ref={inputRef}
        value={value}
        onChangeText={handleOnChange}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        style={[styles.input, {paddingTop: focus || value? 16: 0, borderColor: colorBorder()}]}
        placeholder={focus? undefined : placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
      />
      {isError && <Text style={styles.errorText}>{errorText}</Text>}
    </TouchableOpacity>
  );
};

export default Input;

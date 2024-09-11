import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {globalcolor} from 'public/globalcolor';
import compstyle from './styles';

interface ViewProps {
  Value?: string;
  style?: any;
  Title?: string;
  Key?: string;
  Error?: boolean;

  InputRules: any;
  onChangeText?: (Value: string, text: string, index?: number) => void;
  placeholder?: string;
  iconpress?(): void;
  secureTextentry?: any;
  placetextcolor?: any;
  icon?: any;
  mandatory?: boolean;
  RightImg?: any;
  LeftImg?: any;
}

function CustomTextInput({
  Value = '',
  style = compstyle.normaltxt,
  icon,
  Title = '',
  Key = '',
  Error = false,
  RightImg = false,
  mandatory = false,
  InputRules,
  onChangeText = () => {},
  placeholder,
  iconpress = () => {},
  secureTextentry,
  placetextcolor,
  LeftImg,
}: ViewProps) {
  const [focus, setFocus] = useState(false);
  return (
    <View style={[compstyle.custominputview]}>
      {Title != '' && (
        <Text style={[compstyle.inputinfotxt]}>
          {Title}
          {mandatory && (
            <Text style={{color: 'red', justifyContent: 'center'}}>*</Text>
          )}
        </Text>
      )}
      <View
        style={[
          compstyle.inputview,
          style,
          {
            borderColor: focus
              ? globalcolor.inputfocus
              : globalcolor.inputunfocus,
            backgroundColor:
              InputRules?.editable == undefined || InputRules?.editable == true
                ? globalcolor.inputbackgroundcolor
                : globalcolor.inputbackgroundcolordisabled,
          },
        ]}>
        {LeftImg && <Image source={LeftImg} style={[compstyle.inputleftimg]} />}
        <TextInput
          style={[compstyle.input]}
          maxLength={InputRules?.maxLength}
          multiline={InputRules?.multiline}
          editable={InputRules?.editable}
          keyboardType={InputRules?.keyboardType}
          secureTextEntry={secureTextentry}
          autoCorrect={false}
          selectTextOnFocus={InputRules?.editable}
          textAlignVertical="top"
          onChangeText={text => onChangeText(Key, text || '')}
          value={Value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          placeholderTextColor={placetextcolor}
        />
        {RightImg && (
          <TouchableOpacity onPress={iconpress}>
            <Image
              source={RightImg}
              style={[compstyle.inputleftimg, icon, {marginTop: 10}]}
            />
          </TouchableOpacity>
        )}
      </View>
      {Error && <Text style={[compstyle.errorinfotxt]}>Fiels Is Required</Text>}
    </View>
  );
}

export default CustomTextInput;

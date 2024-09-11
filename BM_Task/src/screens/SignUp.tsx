import CustomTextInput from 'components/CustomTextInput';

import {InputRules} from 'components/IInputRules';
import {globalcolor} from 'public/globalcolor';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {navigate, replace} from './root/NavigationService';
import {SCREENS} from './root/RootScreens';
import {ILoginService} from 'services/login/ILoginService';
import LoginService from 'services/login/LoginService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from '@react-native-community/checkbox';

const {width, height} = Dimensions.get('window');

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const loginService: ILoginService = new LoginService();

  function onChangeText(type: string, text: string) {
    if (type === 'USERNAME') {
      setEmail(text);
    } else if (type === 'PASSWORD') {
      setPassword(text);
    } else if (type === 'Name') {
      setName(text);
    }
  }

  const showpassword = () => {
    setHidePassword(!hidePassword);
  };

  function handleLogIn() {
    navigate(SCREENS.LOGIN);
  }

  async function handleSubmit() {
    if (!email) {
      alert('Please enter the phone number');
    } else if (!password) {
      alert('Please enter the password ');
    } else {
      let userDetails: any = {
        phone: email,
        password: password,
        name: name,
      };
      console.log('userDetails', userDetails);

      await loginService
        .userSignUp(userDetails)
        .then(async data => {
          if (data) {
            if (data.status) {
              let username = data?.data?.name;
              console.log('username:', username);
              if (username) {
                await AsyncStorage.setItem('Name', username);
                alert(data.message);
                replace(SCREENS.HOME);
              } else {
                alert('No username found in the response');
              }
            } else {
              alert('SignUp Failed: ' + data.message);
            }
          } else {
            alert('Invalid Credentials');
          }
        })
        .catch(function (error) {
          console.log('userLogin', error);
        });
    }
  }

  return (
    <SafeAreaView style={styles.Parent}>
      <View style={styles.container}>
        <Image source={require('assets/logoHome.png')} style={styles.logo} />

        <Text style={styles.signInText}>Sign Up</Text>
        <Text style={styles.welcomeText}>
          Fill in the below form and add life to your car!
        </Text>
      </View>
      <CustomTextInput
        Key={'Name'}
        Title="Name"
        style={styles.iteminput}
        LeftImg={require('assets/user.png')}
        InputRules={
          (new InputRules().InputRulesData = {
            keyboardType: 'default',
          })
        }
        placeholder={'Enter Your Name'}
        Value={name}
        onChangeText={onChangeText}
      />
      <CustomTextInput
        Key={'USERNAME'}
        Title="Phone Number"
        style={styles.iteminput}
        LeftImg={require('assets/mail.png')}
        InputRules={
          (new InputRules().InputRulesData = {
            keyboardType: 'number-pad',
          })
        }
        placeholder={'Enter Your Phone Number'}
        Value={email}
        onChangeText={onChangeText}
      />
      <CustomTextInput
        Key={'PASSWORD'}
        Title="Password"
        style={styles.iteminput}
        LeftImg={require('assets/password.png')}
        InputRules={
          (new InputRules().InputRulesData = {
            keyboardType: 'default',
          })
        }
        RightImg={
          hidePassword
            ? require('assets/Passwordhid.png')
            : require('assets/Passunhide.png')
        }
        placeholder={'Enter Your Password'}
        Value={password}
        onChangeText={onChangeText}
        secureTextentry={hidePassword}
        iconpress={showpassword}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.termsContainer}>
        <CheckBox
          value={isChecked}
          onValueChange={setIsChecked}
          tintColors={{true: '#007BFF', false: '#000'}}
        />
        <Text style={styles.termsText}>
          I agree to the
          <Text style={styles.termsLink}>Terms and Conditions</Text>
        </Text>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleLogIn}>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.agreeText}>
        By login or sign up, you agree to our terms of use and privacy policy
      </Text>
      <Image
        source={require('assets/downRight.png')}
        style={styles.splashImage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: globalcolor.white,
    flexDirection: 'column',
    height: 'auto',
    alignContent: 'flex-start',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
  },
  iteminput: {
    fontSize: 18,
    fontWeight: '400',
    color: globalcolor.black,
    marginTop: 5,
    marginHorizontal: 15,
    marginBottom: 5,
  },
  signInText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  agreeText: {
    fontSize: 12,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: globalcolor.btnColor,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  forgotPassword: {
    color: '#007BFF',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  orText: {
    color: '#aaa',
    marginVertical: 15,
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  socialButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  signUpText: {
    color: '#777',
    marginRight: 5,
  },
  signUpLink: {
    color: '#007BFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
  splashImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 0,
    width: width * 0.2,
    height: height * 0.1,
    resizeMode: 'cover',
    transform: [{rotate: '90deg'}],
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  termsText: {
    fontSize: 16,
    color: '#777',
    marginLeft: 10,
  },
  termsLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default SignUp;

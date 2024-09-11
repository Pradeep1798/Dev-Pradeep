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
import ForgotModal from './ForgotModal';

const {width, height} = Dimensions.get('window');

const LogIn = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const loginService: ILoginService = new LoginService();

  function onChangeText(type: string, text: string) {
    if (type === 'USERNAME') {
      setEmail(text);
    } else if (type === 'PASSWORD') {
      setPassword(text);
    }
  }

  const showpassword = () => {
    setHidePassword(!hidePassword);
  };

  function handleSignUp() {
    navigate(SCREENS.SIGNUP);
  }

  async function handleSubmit() {
    if (!email) {
      alert('Please enter the phone number');
    } else if (!password) {
      alert('Please enter the password');
    } else {
      let userDetails: any = {
        phone: email,
        password: password,
      };
      console.log('userDetails', userDetails);

      await loginService
        .userLogin(userDetails)
        .then(async data => {
          console.log('Full login response:', data);

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
              alert('LogIn Failed: ' + data.message);
            }
          } else {
            alert('Invalid Credentials');
          }
        })
        .catch(function (error) {
          console.log('Error during userLogin:', error);
        });
    }
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.Parent}>
      <View style={styles.container}>
        <Image source={require('assets/logoHome.png')} style={styles.logo} />

        <Text style={styles.signInText}>Sign In</Text>
        <Text style={styles.welcomeText}>
          Hi! Welcome back, you have been missed
        </Text>
      </View>
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

      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('assets/Google_logo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('assets/Apple_Logo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don’t have an account?</Text>
        <TouchableOpacity onPress={handleSignUp}>
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
      <ForgotModal isVisible={isModalVisible} onClose={toggleModal} />
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
  agreeText: {
    fontSize: 12,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
    marginLeft: 2,
    marginRight: 2,
  },
  welcomeText: {
    fontSize: 16,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
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
    color: globalcolor.white,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '80%',
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});

export default LogIn;

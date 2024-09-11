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

const {width, height} = Dimensions.get('window');

const SignUp = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [hidePassword, setHidePassword] = useState<boolean>(true);

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

  function handleSubmit() {
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

      loginService
        .userSignUp(userDetails)
        .then(async data => {
          if (data) {
            console.log('userLogin', data);
            if (data.status) {
              alert('Registration Success');
              let username = data.data;
              replace(SCREENS.HOME, username);
            } else {
              alert('Registration Failed');
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

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.signUpText}>
        Already have an account?
        <TouchableOpacity onPress={handleLogIn} style={{marginTop: 5}}>
          <Text style={styles.signUpLink}>Sign In</Text>
        </TouchableOpacity>
      </Text>
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
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ADD8E6',
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
  signUpText: {
    color: '#777',
    marginBottom: 20,
    textAlign: 'center',
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

export default SignUp;

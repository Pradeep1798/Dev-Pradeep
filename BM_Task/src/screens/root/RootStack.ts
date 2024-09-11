import {NavigationProp} from '@react-navigation/native';

export type RootStackScreens = {
  SplashPage: any;
  LoginPage: any;
  HomePage: any;
  SignUpPage: any;
  InfoPage: any;
};

export type StackNavigation = NavigationProp<RootStackScreens>;

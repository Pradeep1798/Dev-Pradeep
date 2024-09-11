import {
  LoginRequestDetails,
  SignUpRequestDetails,
  SignUpResponseDetails,
} from 'services/Modal/LogIn';

export interface ILoginService {
  userLogin: (data: LoginRequestDetails) => Promise<SignUpResponseDetails>;
  userSignUp: (data: SignUpRequestDetails) => Promise<SignUpResponseDetails>;
}

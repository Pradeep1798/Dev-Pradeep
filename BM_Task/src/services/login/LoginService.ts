import {
  LoginRequestDetails,
  SignUpRequestDetails,
  SignUpResponseDetails,
} from 'services/Modal/LogIn';
import {ILoginService} from './ILoginService';
import axios from 'axios';

export default class LoginService implements ILoginService {
  async userLogin(data: LoginRequestDetails): Promise<SignUpResponseDetails> {
    return await axios.post(
      `https://tor.appdevelopers.mobi/api/login?phone=${data.phone}&password=${data.password}`,
    );
  }
  async userSignUp(data: SignUpRequestDetails): Promise<SignUpResponseDetails> {
    return await axios.post(
      `https://tor.appdevelopers.mobi/api/register?phone=${data.phone}&password=${data.password}&name=${data.name}`,
    );
  }
}

import {
  LoginRequestDetails,
  SignUpRequestDetails,
  SignUpResponseDetails,
} from 'services/Modal/LogIn';
import {ILoginService} from './ILoginService';
import axios from 'axios';

export default class LoginService implements ILoginService {
  async userLogin(data: LoginRequestDetails): Promise<SignUpResponseDetails> {
    const response = await axios.post(
      `https://tor.appdevelopers.mobi/api/login?phone=${data.phone}&password=${data.password}`,
    );
    return response.data;
  }

  async userSignUp(data: SignUpRequestDetails): Promise<SignUpResponseDetails> {
    const response = await axios.post(
      `https://tor.appdevelopers.mobi/api/register?phone=${data.phone}&password=${data.password}&name=${data.name}`,
    );
    return response.data;
  }
}

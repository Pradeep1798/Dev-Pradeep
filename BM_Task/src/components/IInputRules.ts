import {KeyboardTypeOptions} from 'react-native';

interface IInputRules {
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  multiline?: boolean;
  editable?: boolean;
  hidePassword?: boolean;
  MinDate?: any;
  MaxDate?: any;
}

export class InputRules {
  InputRulesData: IInputRules = {
    keyboardType: 'default' as KeyboardTypeOptions,
    maxLength: 100,
    multiline: false,
    editable: true,
    hidePassword: false,
  };
}

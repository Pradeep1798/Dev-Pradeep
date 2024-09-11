import CustomTextInput from 'components/CustomTextInput';
import {InputRules} from 'components/IInputRules';
import {globalcolor} from 'public/globalcolor';
import {useState} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
};

const ForgotModal = ({isVisible, onClose}: ModalProps) => {
  const [userId, setUserId] = useState<string>('');

  async function SubmitHandler() {
    console.log('SubmitHandler-------------', userId);

    if (!userId) {
      alert('Please enter the phone number');
    } else {
      alert('Forgot password link has been sent to your phone number');
      onClose();
    }
  }

  function cancelPressed() {
    onClose();
  }

  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={cancelPressed}>
      <View style={modalStyles.container}>
        <View style={modalStyles.content}>
          <Text style={modalStyles.title}>Forgot Password</Text>

          <CustomTextInput
            Key="userName"
            style={modalStyles.iteminput}
            LeftImg={require('assets/mail.png')}
            InputRules={
              (new InputRules().InputRulesData = {
                keyboardType: 'number-pad',
              })
            }
            placeholder="Enter Your Phone Number"
            Value={userId}
            onChangeText={(e, text) => setUserId(text)}
            Title="Phone Number"
          />

          <View style={modalStyles.buttonContainer}>
            <TouchableOpacity
              style={modalStyles.button}
              onPress={SubmitHandler}>
              <Text style={modalStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotModal;

const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    maxHeight: '60%',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: globalcolor.btnColor,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  iteminput: {
    fontSize: 18,
    fontWeight: '400',
    color: globalcolor.black,
    marginTop: 5,
    marginHorizontal: 15,
  },
});

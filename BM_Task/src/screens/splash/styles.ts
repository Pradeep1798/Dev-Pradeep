import {globalcolor} from 'public/globalcolor';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    position: 'absolute',
    width: 150,
    height: 150,
  },
  topLeft: {
    top: 0,
    left: 0,
    margin: 0,
  },
  topRight: {
    top: 0,
    right: 0,
    margin: 0,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    margin: 0,
  },
  logo: {
    width: 250,
    height: 250,
  },
});

export default styles;

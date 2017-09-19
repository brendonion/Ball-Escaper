import { StyleSheet } from 'react-native';

const BACKGROUND = '#0078cd';
const HEADER_BACKGROUND = '#0060A4';
const BORDER_COLOR = '#d6d7da';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 300,
  },
  joystickContainer: {
    position: 'absolute',
    height: 100,
    width: 100,
    borderRadius: 200,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR,
    backgroundColor: HEADER_BACKGROUND,
  },
  stick: {
    width: 50,
    height: 50,
    backgroundColor: BACKGROUND,
    opacity: 0.7,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: BORDER_COLOR,
  }
});

export default styles

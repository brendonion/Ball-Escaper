import { StyleSheet } from 'react-native';

const BACKGROUND = '#0078cd';
const HEADER_BACKGROUND = '#0060A4';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BACKGROUND,
  },
  game: {
    position: 'relative',
    height: 300,
    width: 300,
    backgroundColor: 'white',
  },
  logo: {
    marginBottom: 40
  },
  title: {
    marginBottom: 10,
    marginLeft: 15,
  },
  text: {
    color: 'white', 
  },
  startButton: {
    width: 50,
  },
  headerContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: HEADER_BACKGROUND,
  },
  headerLogoStyle: {
    width: 200,
    height: 150,
  },
});

export default styles

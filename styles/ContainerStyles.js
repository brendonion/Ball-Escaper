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
  gameOverContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: 'white',
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
  countdown: {
    fontSize: 20,
    color: 'white',
    padding: 2,
  },
  largeText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  playAgain: {
    fontSize: 15,
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
  }
});

export default styles

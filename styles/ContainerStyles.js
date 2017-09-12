import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0078cd'
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
    width: '100%',
    backgroundColor: '#0060A4',
  },
  headerLogoStyle: {
    position: 'absolute',
    top: 0,
    right: 20,
    width: 100,
    height: 50,
  },
  headerTitleStyle: {
    width: '70%',
    height: 10,
    padding: 20
  }
});

export default styles
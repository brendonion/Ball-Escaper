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
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#0060A4',
  },
  headerLogoStyle: {
    width: 200,
    height: 150,
  },
  headerTitleStyle: {
    width: 200,
  }
});

export default styles

import { StyleSheet } from 'react-native';
import COLORS from '@Utils/CommonColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.midnightBlack,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 250,
    width: 250,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterText: {
    color: COLORS.smoke,
    fontSize: 40,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import COLORS from '@Utils/CommonColors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.midnightBlack,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 250,
    width: 250,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginBottom: 20,
  },
  title: {
    color: COLORS.white,
    fontSize: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    width: 180,
    height: 70,
    borderColor: COLORS.mediumGrey,
    borderWidth: 5,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.blue,
  },
  buttonText: {
    color: COLORS.smoke,
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  inputText: {
    color: COLORS.smoke,
    height: 70,
    width: 250,
    borderWidth: 1,
    borderColor: COLORS.smoke,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
  authButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  authText: {
    fontSize: 12,
    color: COLORS.smoke,
  },
  authNavText: {
    fontSize: 12,
    color: COLORS.yellow,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default styles;

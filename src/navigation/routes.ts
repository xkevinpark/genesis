enum Routes {
  SPLASH = 'Splash',
  AUTH = 'Auth',
  RESET_PASSWORD = 'ResetPassword',
  SIGN_IN = 'SignIn',
  SIGN_UP = 'SignUp',
  HOME = 'Home',
}

export type ScreenName = keyof Routes;

export default Routes;
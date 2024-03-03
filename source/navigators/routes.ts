import AUTH_ROUTES from '../screens/auth/stack/routes'
import HOME_ROUTES from '@source/screens/home/stack/routes'

enum APP_ROUTES {
  // auth routes
  LOGIN = AUTH_ROUTES.LOGIN,
  SIGNUP = AUTH_ROUTES.SIGNUP,

  // home routes
  HOME = HOME_ROUTES.HOME,
}

export default APP_ROUTES

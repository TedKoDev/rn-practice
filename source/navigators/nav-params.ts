import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import APP_ROUTES from './routes'

export type AppNavigationParams = {
  // auth routes
  [APP_ROUTES.LOGIN]: undefined
  [APP_ROUTES.SIGNUP]: undefined
  // home routes
  [APP_ROUTES.HOME]: undefined
}

type SCREEN_TYPE = keyof AppNavigationParams

export type AppNavigationProps = NativeStackNavigationProp<
  AppNavigationParams,
  SCREEN_TYPE,
  keyof typeof APP_ROUTES
>

export type Props<RouteName extends keyof AppNavigationParams> = NativeStackNavigationProp<
  AppNavigationParams,
  RouteName
>

export type RootRouteProps<RouteName extends keyof AppNavigationParams> = RouteProp<
  AppNavigationParams,
  RouteName
>

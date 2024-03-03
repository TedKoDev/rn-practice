import { useCallback, useRef } from 'react'
import { useNavigation, CommonActions, StackActions } from '@react-navigation/native'

import { AppNavigationParams, AppNavigationProps } from '@navigators/nav-params'
import APP_ROUTES from '@navigators/routes'

export default function useTypedNavigation() {
  const navigation = useNavigation<AppNavigationProps>()

  const rootNavigation = useRef(navigation)

  const rootNavigate = (route: any, params?: any) => {
    rootNavigation.current.navigate(route, params)
  }

  return {
    APP_ROUTES,
    rootNavigate,
    ...navigation,
  }
}

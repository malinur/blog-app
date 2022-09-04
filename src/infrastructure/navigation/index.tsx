import React, { FunctionComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen'
import CreateNewPostScreen from '../../screens/CreateNewPostScreen'
import { StackParamList } from './types'
import { colors } from '../theme/colors'
import Logo from '../../components/Logo'

const Stack = createStackNavigator<StackParamList>()

const Navigation: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: colors.tprimary,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        // options={{ headerTitle: props => <Logo {...props} /> }}
      />
      <Stack.Screen
        name="CreateNewPost"
        component={CreateNewPostScreen}
        options={{ title: 'Create New Post' }}
      />
    </Stack.Navigator>
  )
}

export default Navigation

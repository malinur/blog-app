import React, { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { SafeArea } from '../../components/SafeArea'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../infrastructure/navigation/types'

type HomeScreenProps = StackNavigationProp<StackParamList, 'Home'>

const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenProps>()
  return (
    <SafeArea>
      <Text>Home Screen</Text>
      <Button
        title="New Post"
        onPress={() => navigation.navigate('CreateNewPost')}
      />
    </SafeArea>
  )
}

export default HomeScreen

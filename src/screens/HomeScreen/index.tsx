import React, { FunctionComponent } from 'react'
import { FlatList } from 'react-native'
import { SafeArea } from '../../components/SafeArea'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../infrastructure/navigation/types'
import PostItem from '../../components/PostItem'
import { useAppSelector } from '../../store/hooks'

type HomeScreenProps = StackNavigationProp<StackParamList, 'Home'>

export interface PostProps {
  id: string
  title: string
  createdAt: string
  status: string
  description: string
  imageUri: string
}

const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const post = useAppSelector(state => state.post)

  return (
    <SafeArea>
      <FlatList
        data={post.posts}
        renderItem={({ item }) => <PostItem data={item} />}
        keyExtractor={item => item.id}
      />
      <Button
        title="New Post"
        onPress={() => navigation.navigate('CreateNewPost')}
      />
    </SafeArea>
  )
}

export default HomeScreen

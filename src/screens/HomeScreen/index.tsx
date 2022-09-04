import React, { FunctionComponent } from 'react'
import { FlatList } from 'react-native'
import { SafeArea } from '../../components/SafeArea'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../infrastructure/navigation/types'
import PostItem from '../../components/PostItem'

type HomeScreenProps = StackNavigationProp<StackParamList, 'Home'>

export interface PostProps {
  id: string
  title: string
  createdAt: Date
  status: string
  image: string
  body: string
}

const posts = [
  {
    id: '11',
    title: 'lalal',
    status: 'published',
    description: 'lslsls',
    body: "nside this file, let's create a custom component using TouchableOpacity and Text . This custom button component is going to have props such as ",
  },
  {
    id: '12',
    title: 'lalal',
    status: 'published',
    description: 'lslsls',
    body: "nside this file, let's create a custom component using TouchableOpacity and Text . This custom button component is going to have props such as ",
  },
]
const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenProps>()

  return (
    <SafeArea>
      <FlatList
        data={posts}
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

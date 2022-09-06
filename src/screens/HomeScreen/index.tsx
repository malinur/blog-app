import React, { FunctionComponent } from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

import { StackNavigationProp } from '@react-navigation/stack'
import Button from '../../components/Button'
import { SafeArea } from '../../components/SafeArea'
import { StackParamList } from '../../infrastructure/navigation/types'
import PostItem from '../../components/PostItem'
import { useAppSelector } from '../../store/hooks'
import TitleText from '../../components/Text/TitleText'

type HomeScreenProps = StackNavigationProp<StackParamList, 'Home'>

export interface PostProps {
  id: string
  title: string
  createdAt: string
  status: string
  description: string
  imageUri: string
}

const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const HomeScreen: FunctionComponent = () => {
  const navigation = useNavigation<HomeScreenProps>()

  const posts = useAppSelector(state => state.posts)
  console.log(posts)

  const NoPosts = () => {
    return (
      <TextContainer>
        <TitleText>No posts yet</TitleText>
      </TextContainer>
    )
  }

  return (
    <SafeArea>
      {posts.length ? (
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostItem data={item} />}
          keyExtractor={item => item.id}
        />
      ) : (
        <NoPosts />
      )}
      <Button
        title="New Post"
        onPress={() => navigation.navigate('CreateNewPost')}
      />
    </SafeArea>
  )
}

export default HomeScreen

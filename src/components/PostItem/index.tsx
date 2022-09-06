import React from 'react'
import { View } from 'react-native'
import moment from 'moment'

import { colors } from '../../infrastructure/theme/colors'
import { Container, HeaderContainer, Image } from './styles'
import TitleText from '../Text/TitleText'
import Status from '../Status'
import CaptionText from '../Text/CaptionText'
import BodyText from '../Text/BodyText'
import { PostProps } from '../../screens/HomeScreen'

const PostItem = ({ data }: { data: PostProps }) => {
  const date =
    data.createdAt && moment(data.createdAt).format('YY/MM/DD HH:mm A')

  return (
    <Container>
      <HeaderContainer>
        <Image source={{ uri: data.imageUri }} />
        <View>
          <TitleText textStyles={{ marginBottom: 12 }}>{data.title}</TitleText>
          <CaptionText
            textStyles={{ marginBottom: 12, color: colors.tsecondary }}>
            Created at:
            <CaptionText> {date}</CaptionText>
          </CaptionText>
          <Status status={data.status} />
        </View>
      </HeaderContainer>
      <BodyText numberOfLines={2}>{data.description}</BodyText>
    </Container>
  )
}

export default PostItem

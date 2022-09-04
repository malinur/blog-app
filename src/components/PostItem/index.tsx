import React from 'react'
import { colors } from '../../infrastructure/theme/colors'
import TitleText from '../Text/TitleText'
import CaptionText from '../Text/CaptionText'
import Status from '../Status'
import BodyText from '../Text/BodyText'
import { View } from 'react-native'
import { Container, HeaderContainer, Image } from './styles'
import { PostProps } from '../../screens/HomeScreen'

const PostItem = ({ data }: { data: PostProps }) => {
  return (
    <Container>
      <HeaderContainer>
        {/*<Image source={{ uri: data.imageUrl }} />*/}
        <Image source={require('../../../assets/placeholder-image.png')} />
        <View>
          <TitleText textStyles={{ marginBottom: 12 }}>{data.title}</TitleText>
          <CaptionText
            textStyles={{ marginBottom: 12, color: colors.tsecondary }}>
            Created at:
            <CaptionText>
              {' '}
              {data.createdAt && data.createdAt.toString()}
            </CaptionText>
          </CaptionText>
          <Status status={data.status} />
        </View>
      </HeaderContainer>
      <BodyText numberOfLines={2}>{data.body}</BodyText>
    </Container>
  )
}

export default PostItem

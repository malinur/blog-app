import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'

export const ImagePickerButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background-color: ${colors.bgraytertiary};
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`
export const ImageContainer = styled.View`
  width: 80px;
  height: 80px;
`
export const PostImage = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: 12,
  },
})`
  width: 80px;
  height: 80px;
  margin-top: 18px;
  align-items: flex-end;
`

import styled from 'styled-components/native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Platform } from 'react-native'

import { colors } from '../../infrastructure/theme/colors'
import Input from '../../components/Input'
import CloseIcon from '../../../assets/closeIcon'

export const FormContainer = styled.View`
  background-color: ${colors.white};
  padding: 20px 16px 20px 16px;
  margin-top: 12px;
`
export const DescriptionInput = styled(Input)`
  text-align-vertical: top;
  ${Platform.OS === 'ios' && 'min-height: 80px'};
`
export const Dropdown = styled(DropDownPicker).attrs({
  placeholderStyle: {
    color: colors.tsecondary,
  },
  dropDownContainerStyle: {
    borderColor: colors.bgraysecondary,
  },
})`
  border: none;
  background-color: ${colors.bgraysecondary};
  margin-top: 8px;
  margin-bottom: 12px;
`
export const ImagePicker = styled.TouchableOpacity`
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

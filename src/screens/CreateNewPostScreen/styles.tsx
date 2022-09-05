import styled from 'styled-components/native'
import DropDownPicker from 'react-native-dropdown-picker'
import { Platform } from 'react-native'

import { colors } from '../../infrastructure/theme/colors'
import Input from '../../components/Input'

export const FormContainer = styled.View`
  background-color: ${colors.white};
  padding: 20px 16px 20px 16px;
  margin-top: 12px;
`
export const DescriptionInput = styled(Input)`
  text-align-vertical: top;
  ${Platform.OS === 'ios' && 'min-height: 80px'};
`


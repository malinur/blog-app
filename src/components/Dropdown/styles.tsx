import styled from 'styled-components/native'
import DropDownPicker from 'react-native-dropdown-picker'

import { colors } from '../../infrastructure/theme/colors'

export const DropdownInput = styled(DropDownPicker).attrs({
  placeholderStyle: {
    color: colors.tsecondary,
  },
  dropDownContainerStyle: {
    borderColor: colors.bgraysecondary,
  },
})`
  border: none;
  background-color: ${colors.bgraysecondary};
`
export const DropdownContainer = styled.View`
  margin-top: 8px;
  margin-bottom: 12px;
  z-index: 9999;

`

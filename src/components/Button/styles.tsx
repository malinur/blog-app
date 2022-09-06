import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0 12px 0;
  margin: 16px;
  //margin-bottom: 80px;
  background-color: ${colors.primary};
  border-radius: 8px;
  margin-top: auto;
`
export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  font-family: Lato-Regular;
  color: ${colors.white};
`

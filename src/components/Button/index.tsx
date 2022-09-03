import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'
import { GestureResponderEvent } from 'react-native'

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 12px 0 12px 0;
  margin: 16px;
  //margin-bottom: 80px;
  background-color: ${colors.primary};
  border-radius: 8px;
`
const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  font-family: Lato-Regular;
  color: ${colors.white};
`

interface ButtonProps {
  title: string
  onPress: ((event: GestureResponderEvent) => void) | undefined
}

const Button: FunctionComponent<ButtonProps> = ({ title, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  )
}

export default Button

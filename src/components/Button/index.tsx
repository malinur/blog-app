import React, { FunctionComponent } from 'react'
import { GestureResponderEvent } from 'react-native'

import { ButtonContainer, ButtonText } from './styles'

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

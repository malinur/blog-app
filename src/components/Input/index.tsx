import React from 'react'
import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'
import { TextInput, TextInputProps } from 'react-native'

const InputContainer = styled.View`
  background-color: ${colors.bgraysecondary};
  border-radius: 8px;
  padding-left: 12px;
  padding-top: 18px;
  padding-bottom: 18px;
`
// ${Platform.OS === 'ios' &&
// `padding-left: 12px;
// padding-top: 18px;
// padding-bottom: 18px;`}

const Input = (props: TextInputProps) => {
  const { ...otherProps } = props
  return (
    <InputContainer>
      <TextInput {...otherProps} />
    </InputContainer>
  )
}

export default Input
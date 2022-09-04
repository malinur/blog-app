import React, { FunctionComponent } from 'react'
import { TextProps } from './types'
import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'

const StyledText = styled.Text`
  font-size: 12px;
  font-family: Lato-Regular;
  font-weight: 400;
  color: ${colors.tprimary};
`

const CaptionText: FunctionComponent<TextProps> = ({
  textStyles,
  children,
  ...otherProps
}) => {
  return (
    <StyledText style={textStyles} {...otherProps}>
      {children}
    </StyledText>
  )
}

export default CaptionText

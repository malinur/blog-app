import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

const LogoImage = styled.Image`
  width: 24px;
  height: 24px;
`

const Logo: FunctionComponent = () => {
  return <LogoImage source={require('../../../assets/Logo.svg')} />
}
export default Logo

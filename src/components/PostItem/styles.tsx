import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'

export const Container = styled.View`
  padding: 16px;
  background-color: ${colors.white};
  margin-top: 12px;
`
export const Image = styled.Image`
  width: 128px;
  height: 128px;
  background-color: ${colors.bgraysecondary};
  contain: size;
  border-radius: 12px;
  flex-direction: column;
  margin-right: 16px;
  margin-bottom: 16px;
`
export const HeaderContainer = styled.View`
  flex-direction: row;
`

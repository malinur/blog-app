import styled from 'styled-components/native'
import { colors } from '../../infrastructure/theme/colors'

interface StatusType {
  readonly isPublished: boolean
}

export const StatusContainer = styled.View<StatusType>`
  background-color: ${props =>
    props.isPublished ? colors.bsuccess : colors.bdanger};
  padding: 8px 12px 8px 12px; //
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  align-self: flex-start;
`

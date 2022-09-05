import React, { FunctionComponent } from 'react'
import { StatusContainer } from './styles'
import { colors } from '../../infrastructure/theme/colors'
import BodyText from '../Text/BodyText'

interface StatusProps {
  status: string
}

const Status: FunctionComponent<StatusProps> = ({ status }) => {
  const isPublished = status && status.toLowerCase() === 'published'

  return (
    <StatusContainer isPublished={isPublished}>
      <BodyText
        textStyles={{ color: isPublished ? colors.tsuccess : colors.tdanger }}>
        {status}
      </BodyText>
    </StatusContainer>
  )
}

export default Status

import React, { FunctionComponent, useState } from 'react'
import { ValueType } from 'react-native-dropdown-picker'
import { DropdownContainer, DropdownInput } from './styles'
import { FieldError } from 'react-hook-form'
import BodyText from '../Text/BodyText'
import { colors } from '../../infrastructure/theme/colors'

interface DropdownProps {
  value: ValueType | null
  setValue: (value: ValueType | ((prevVar: ValueType) => ValueType)) => void
  error?: FieldError
}

const Dropdown: FunctionComponent<DropdownProps> = ({ value, setValue, error }) => {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState([
    { label: 'Published', value: 'Published' },
    { label: 'Draft', value: 'Draft' },
  ])

  return (
    <DropdownContainer>
      <DropdownInput
        open={open}
        value={value}
        items={status}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setStatus}
        placeholder="Select"
      />
      { error && (
        <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
          {error.message}
        </BodyText>
      )}
    </DropdownContainer>
  )
}

export default Dropdown

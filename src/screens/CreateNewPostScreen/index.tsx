import TitleText from 'components/Text/TitleText'
import React, { FunctionComponent, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { SafeArea } from '../../components/SafeArea'
import { DescriptionInput, Dropdown, FormContainer } from './styles'

type FormData = {
  id: string
  title: string
  createdAt: Date
  status: string
  description: string
  body: string
  imageUrl: string
}

const CreateNewPostScreen: FunctionComponent = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>()

  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState([
    { label: 'Published', value: 'published' },
    { label: 'Draft', value: 'draft' },
  ])

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }
  return (
    <SafeArea>
      <FormContainer>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Title"
            />
          )}
          name="title"
          rules={{ required: true }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              open={open}
              value={value}
              items={status}
              setOpen={setOpen}
              setValue={onChange}
              setItems={setStatus}
            />
          )}
          name="status"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <DescriptionInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline={true}
              numberOfLines={4}
              placeholder="Description"
            />
          )}
          name="description"
          rules={{ required: true }}
        />
      </FormContainer>
      <FormContainer>
        <TitleText>Photo</TitleText>

      </FormContainer>
      <Button title="New Post" onPress={handleSubmit(onSubmit)} />
    </SafeArea>
  )
}

export default CreateNewPostScreen

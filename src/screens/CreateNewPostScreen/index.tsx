import React, { FunctionComponent } from 'react'
import { Text, TextInput } from 'react-native'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Button from '../../components/Button'

type FormData = {
  name: string
}

const CreateNewPostScreen: FunctionComponent = () => {
  const { handleSubmit, control, formState: { errors } } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }
  return (
    <>
      <Text>New Post</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Button
        title="New Post"
        onPress={handleSubmit(onSubmit)}
      />
    </>
  )
}

export default CreateNewPostScreen

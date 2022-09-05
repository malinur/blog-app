import TitleText from '../../components/Text/TitleText'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import Button from '../../components/Button'
import Input from '../../components/Input'
import { SafeArea } from '../../components/SafeArea'
import { DescriptionInput, FormContainer } from './styles'
import BodyText from '../../components/Text/BodyText'
import { colors } from '../../infrastructure/theme/colors'
import ImagePicker from '../../components/ImagePicker'
import Dropdown from '../../components/Dropdown'
import { useAppDispatch } from '../../store/hooks'
import { addPost } from '../../store/postSlice'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../infrastructure/navigation/types'

export type FormData = {
  id: string
  title: string
  createdAt: Date
  status: string
  description: string
  body: string
  imageUri: string
}

type CreateNewPostScreenProps = StackNavigationProp<
  StackParamList,
  'CreateNewPost'
>

const CreateNewPostScreen: FunctionComponent = () => {
  const {
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const dispatch = useAppDispatch()

  const navigation = useNavigation<CreateNewPostScreenProps>()

  const [statusValue, setStatusValue] = useState(null)
  const [imageUri, setImageUri] = useState('')

  // register('id')
  // register('status', { minLength: { value: 1, message: 'Enter status' } })
  // register('createdAt')
  // register('imageUri', { minLength: { value: 1, message: 'Choose photo' } })

  useEffect(() => {
    register('id')
    register('status', { required: 'Enter status' })
    register('createdAt')
    register('imageUri', { required: 'Choose photo' })
  }, [register])

  useEffect(() => {
    if (imageUri && imageUri.length) {
      setValue('imageUri', imageUri)
    }
  }, [imageUri, setValue])

  useEffect(() => {
    if (statusValue) {
      setValue('status', statusValue)
    }
  }, [statusValue, setValue])

  const onSubmit: SubmitHandler<FormData> = data => {
    const output = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(Date.now()).toISOString(),
    }
    dispatch(addPost(output))
    navigation.goBack()
    console.log(output)
  }

  return (
    <SafeArea>
      <FormContainer>
        {/*<Input*/}
        {/*  control={control}*/}
        {/*  name="title"*/}
        {/*  error={errors.title}*/}
        {/*  placeholder="title"*/}
        {/*  rule={{ required: 'Enter title' }}*/}
        {/*/>*/}
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
          rules={{ required: 'Enter title' }}
        />
        {errors.title && (
          <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
            {errors.title.message}
          </BodyText>
        )}
        <Dropdown
          value={statusValue}
          setValue={setStatusValue}
          error={errors.status}
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
        {errors.description && (
          <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
            Enter description please
          </BodyText>
        )}
      </FormContainer>
      <FormContainer>
        <TitleText>Photo</TitleText>
        <ImagePicker
          imageUri={imageUri}
          setImageUri={setImageUri}
          error={errors.imageUri}
        />
      </FormContainer>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeArea>
  )
}

export default CreateNewPostScreen

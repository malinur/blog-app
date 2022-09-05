import TitleText from '../../components/Text/TitleText'
import React, { FunctionComponent, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { SafeArea } from '../../components/SafeArea'
import {
  CloseButton,
  DescriptionInput,
  Dropdown,
  FormContainer,
  ImageContainer,
  ImagePicker,
  PostImage,
} from './styles'
import AddIcon from '../../../assets/addIcon'
import BodyText from '../../components/Text/BodyText'
import { colors } from '../../infrastructure/theme/colors'
import CloseIcon from '../../../assets/closeIcon'
import { TouchableOpacity } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'

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

  const [imageUri, setImageUri] = useState<any>(null)

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  const openGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    launchImageLibrary(options, response => {
      console.log('response', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        if (response.assets) {
          const source = { uri: response.assets[0].uri }
          setImageUri(source)
        }
      }
    })
  }

  const clearImage = () => setImageUri(null)

  const renderImage = imageUri ? (
    <PostImage source={{ uri: imageUri.uri }}>
      <TouchableOpacity onPress={() => clearImage()}>
        <CloseIcon />
      </TouchableOpacity>
    </PostImage>
  ) : (
    <ImagePicker onPress={() => openGallery()}>
      <AddIcon />
    </ImagePicker>
  )

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
        {errors.title && (
          <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
            Enter title please
          </BodyText>
        )}
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
              placeholder="Select"
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
        {errors.description && (
          <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
            Enter description please
          </BodyText>
        )}
      </FormContainer>
      <FormContainer>
        <TitleText>Photo</TitleText>

        {renderImage}
      </FormContainer>
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </SafeArea>
  )
}

export default CreateNewPostScreen

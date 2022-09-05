import React, { FunctionComponent, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import CloseIcon from '../../../assets/closeIcon'
import AddIcon from '../../../assets/addIcon'
import { launchImageLibrary } from 'react-native-image-picker'
import { ImagePickerButton, PostImage } from './styles'
import { FieldError, UseFormSetValue } from 'react-hook-form'
import BodyText from '../Text/BodyText'
import { colors } from '../../infrastructure/theme/colors'

interface ImagePickerProps {
  imageUri: string
  setImageUri: (value: string | ((prevVar: string) => string)) => void
  error?: FieldError
}

const ImagePicker: FunctionComponent<ImagePickerProps> = ({
  imageUri,
  setImageUri,
  error,
}) => {
  // const [imageUri, setImageUri] = useState('')

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
          const source = response.assets[0].uri
          console.log(source)
          setImageUri(source)
        }
      }
    })
  }

  const clearImage = () => setImageUri('')

  return (
    <View>
      {imageUri.length ? (
        <PostImage source={{ uri: imageUri }}>
          <TouchableOpacity onPress={() => clearImage()}>
            <CloseIcon />
          </TouchableOpacity>
        </PostImage>
      ) : (
        <>
          <ImagePickerButton onPress={() => openGallery()}>
            <AddIcon />
          </ImagePickerButton>
          {error && (
            <BodyText textStyles={{ color: colors.tdanger, marginTop: 5 }}>
              {error.message}
            </BodyText>
          )}
        </>
      )}
    </View>
  )
}

export default ImagePicker

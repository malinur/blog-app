import React, { FunctionComponent, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { FieldError } from 'react-hook-form'
import { launchImageLibrary } from 'react-native-image-picker'

import CloseIcon from '../../../assets/closeIcon'
import AddIcon from '../../../assets/addIcon'
import { ImagePickerButton, PostImage } from './styles'
import BodyText from '../Text/BodyText'
import { colors } from '../../infrastructure/theme/colors'

interface ImagePickerProps {
  imageUri: string
  setImageUri: (value: string | undefined | ((prevVar: string) => string)) => void
  error?: FieldError
}

const ImagePicker: FunctionComponent<ImagePickerProps> = ({
  imageUri,
  setImageUri,
  error,
}) => {

  const openGallery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }

    launchImageLibrary(options, response => {
      // console.log('response', response)
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        if (response.assets) {
          const source = response.assets[0].uri
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

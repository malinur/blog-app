import React, { FunctionComponent } from 'react'
import { SafeArea } from './src/components/SafeArea'
import { StatusBar } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/infrastructure/navigation'

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  )
}

export default App

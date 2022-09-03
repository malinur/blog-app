import React, { FunctionComponent } from 'react'
import { SafeArea } from './src/components/SafeArea'
import { StatusBar } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import Navigation from './src/infrastructure/navigation'
import { store } from './src/store'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <StatusBar barStyle="dark-content" />
      </NavigationContainer>
    </Provider>
  )
}

export default App

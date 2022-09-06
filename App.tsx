import React, { FunctionComponent } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import Navigation from './src/infrastructure/navigation'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import TitleText from './src/components/Text/TitleText'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<TitleText>Loading...</TitleText>}>
        <NavigationContainer>
          <Navigation />
          <StatusBar barStyle="dark-content" />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App

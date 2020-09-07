import React from 'react'

import UserProvider from './user'
import LocationProvider from './location'

const ContextSource = ({ children }) => {
  return (
    <>
      <UserProvider>
        <LocationProvider>
         {children}
        </LocationProvider>
      </UserProvider>
    </>
  )
}

export default ContextSource

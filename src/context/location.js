import React, { createContext, useState } from 'react'

export const LocationContext = createContext({
  location: '',
  updateLocation: () => null,
  swappedPage: false,
  updateSwappedPage: () => null
})

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState('/')
  const [swappedPage, setSwappedPage] = useState(false)

  return (
    <LocationContext.Provider
      value={{ location, updateLocation: setLocation, swappedPage, updateSwappedPage: setSwappedPage }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider

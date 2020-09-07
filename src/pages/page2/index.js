import React, {useContext} from 'react';
import {LocationContext} from '../../context/location'

const Page2 = (props) => {
  const location = useContext(LocationContext)

 const handleClick = () => {
    location.updateLocation('/')
    props.history.push('/')
  }

  return (
    <div>
      <h1>You are on page {location.location}</h1>
      <button onClick={handleClick}>Go to home</button>
    </div>
  );
}

export default Page2;

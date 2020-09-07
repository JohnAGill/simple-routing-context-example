import React, {useContext} from 'react';
import {UserContext} from '../../context/user'
import {LocationContext} from '../../context/location'

const Home = (props) => {
  const user = useContext(UserContext)
  const location = useContext(LocationContext)

  const handleClick = () => {
    location.updateLocation('/page2')
    props.history.push('/page2')
  }

  return (
    <div>
      <h1>hello, {user.user.name}</h1>
      <h1>You are on page {location.location}</h1>
      <button onClick={handleClick}>Go to page 2</button>
    </div>
  );
}

export default Home;

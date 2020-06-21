import React from 'react';

const StrictAcess = (props) => {
  const { username, password } = props.user;

  if (username === 'joao' && password === 1234) {
    return <p>Welcome João!</p>
  }
  return (
    <div>
      {alert('Acess Denied')}
    </div>
  )
}

export default StrictAcess;

import React from 'react';
 
const Navbar = () => {
  let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
  <nav className='pokeNav'>
    <div>
      <img src={imgUrl} alt="poke-api logo" className='navImage'></img>
    </div>
  </nav>
  )
};

export default Navbar;
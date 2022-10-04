import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Searchbar from './components/searchbar';

export default function App(){
  return(
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
      </div>
    </div>
  )
}
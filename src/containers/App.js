import React from 'react';
import './App.css';
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import About from '../components/About'
import Work from '../components/Work'
import Contact from '../components/Contact'

function App() {
  return (
    <>
      < Navigation/>
      <div className='container'>
        < Home />
        < About />
        < Work />
        < Contact />
      </div>
    </>
  );
}

export default App;

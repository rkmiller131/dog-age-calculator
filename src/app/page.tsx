'use client'
import React from 'react';
import { useTheme } from '../Theme/ThemeProvider';

// note, set up a division between what home has in it:
// Navbar
// cards <- use client and access context there, leaving the rest to ssr
// Footer

const Home = () => {
  const { labTheme, toggleTheme } = useTheme();
  return (
    <div>
      <h1>{`Lab theme active? ${labTheme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
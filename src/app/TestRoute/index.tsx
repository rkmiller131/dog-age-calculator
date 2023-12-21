'use client'
import React from 'react';
import Image from 'next/image'
import { useTheme } from '../../Theme/ThemeProvider';

const Test = () => {
  const { labTheme, toggleTheme } = useTheme();
  return (
    <div className="flex flex-col justify-center absolute top-[4.5rem]">
      <Image
        src="/dogs.png"
        height={225}
        width={225}
        alt="Smiling dogs"
        className="rounded-3xl shadow-drop"
      />
      <h1>{`Lab theme active? ${labTheme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Test;
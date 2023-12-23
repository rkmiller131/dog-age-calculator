'use client'
import React from 'react';
import Image from 'next/image'
import { useTheme } from '../../theme/ThemeProvider';
import GeneralCalCard from './generalCalculator/GeneralCalcCard';
import LabCalcCard from './labradorCalculator/LabCalcCard';

const PageContent = () => {
  const { labTheme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center mt-[-3rem]">
      {/* Adjust the size of the image here for different breakpoints */}
      <div className="w-[225px] h-[225px] md:w-[400px] md:h-[400px]">
        <Image
          src={labTheme ? "/labs.png" : "/dogs.png"}
          objectFit="cover"
          objectPosition="center center"
          alt="Smiling dogs"
          width={225}
          height={225}
          className="rounded-3xl shadow-drop"
        />
      </div>
      <button
        onClick={toggleTheme}
        className={`${labTheme ? 'bg-blue-btn hover:text-faded-blue' : 'bg-yellow-btn hover:text-orange'} rounded-3xl border-2 border-solid border-black p-[0.4rem] pr-[1rem] pl-[1rem] text-drk-blue  shadow-[inset_4px_4px_5px_rgba(0,0,0,0.3)] font-primary mt-[1rem]`}
      >
        {labTheme ? 'General Calculator' : 'Labrador Logarithm'}
      </button>
      {labTheme ? <LabCalcCard /> : <GeneralCalCard />}
    </div>
  );
};

export default PageContent;
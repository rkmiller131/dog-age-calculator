'use client';
import React from 'react';
import Image from 'next/image';
import { useTheme } from '../../labTheme/ThemeProvider';
import GeneralCalcCard from './generalCalculator/GeneralCalcCard';
import LabCalcCard from './labradorCalculator/LabCalcCard';

function PageContent() {
  const { labTheme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center mt-[-3rem] sm:mt-[-3.5rem] md:mt-[-4rem] xl:flex-row xl:justify-evenly xl:items-stretch xl:mt-[-8rem] 2xl:mt-[-7rem] 3xl:mt-[-8rem] 4xl:mt-[-10rem]">
      <div className="flex flex-col">
        {/* Adjust the size of the image here for different breakpoints */}
        <div className="relative w-[225px] h-[225px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] 3xl:w-[450px] 3xl:h-[450px]">
          <Image
            src={labTheme ? '/labs.png' : '/dogs.png'}
            alt="Smiling dogs"
            fill
            className="rounded-3xl shadow-drop"
          />
        </div>
        <button
          onClick={toggleTheme}
          className={`relative
            ${labTheme
              ? 'bg-blue-btn-gradient xl:hover:text-[#724D2F] xl:hover:bg-none xl:hover:bg-blue-btn'
              : 'bg-yellow-btn-gradient xl:hover:text-orange xl:hover:bg-none xl:hover:bg-yellow-btn'
            }
          before:absolute before:content-[''] before:bg-[rgba(255,255,255,0.2)] before:top-0 before:left-[4%] before:w-[92%] before:h-[45%] before:rounded-3xl rounded-3xl border-2 border-solid border-black p-[0.5rem] pr-[1rem] pl-[1rem] text-drk-blue self-center xl:hover:shadow-[inset_4px_4px_5px_rgba(0,0,0,0.3)] font-primary mt-[1.25rem] after:content-[url("/mousePointer.png")] after:flex after:z-10 after:absolute after:right-[0.25rem] xl:after:content-none sm:text-xl md:text-2xl md:mt-[2rem] xl:w-[80%] xl:pt-[1rem] xl:pb-[1rem] 4xl:w-[70%] 4xl:pt-[1.25rem] 4xl:pb-[1.25rem]`}
        >
          {labTheme ? 'General Calculator' : 'Labrador Logarithm'}
        </button>
      </div>
      {labTheme ? <LabCalcCard /> : <GeneralCalcCard />}
    </div>
  );
}

export default PageContent;

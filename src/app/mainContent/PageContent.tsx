'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import { useTheme } from '../../Theme/ThemeProvider';
import SizeSelectIcon from './SizeSelectIcon';
import { sizeIcons } from '../../data/generalCalc';

const PageContent = () => {
  const { labTheme, toggleTheme } = useTheme();
  const [activeSvg, setActiveSvg] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveSvg(index);
  }
  return (
    <div className="flex flex-col justify-center items-center mt-[-3rem]">
      {/* Adjust the size of the image here for different breakpoints */}
      <div className="w-[225px] h-[225px] md:w-[400px] md:h-[400px]">
        <Image
          src={labTheme ? "/labs.png" : "/dogs.png"}
          layout="responsive"
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
      <div className="flex flex-col w-[90%] align-center bg-card-black rounded-3xl mt-[1rem] text-yellow font-primary overflow-hidden shadow-drop">
        <h2 className="bg-yellow-gradient p-[0.5rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] text-center">
          Calculate dog years to human years
        </h2>
        <div className="p-[1.25rem]">
          <span>Size of Dog</span>
          <div className="w-[100%] flex flex-wrap justify-evenly mt-[1rem]">
            {sizeIcons.map((item, index) => (
              <SizeSelectIcon
                icon={item.icon}
                description={item.description}
                handleClick={() => handleClick(index)}
                isActive={activeSvg === index}
                key={item.calcKey}
              />
            ))}
            {/* <SizeSelectIcon icon="smallDog" description="> 20lbs" isActive={true}/>
            <SizeSelectIcon icon="mediumDog" description="21-50lbs" isActive={false}/>
            <SizeSelectIcon icon="largeDog" description="51-100lb" isActive={false}/>
            <SizeSelectIcon icon="giantDog" description="< 100lbs" isActive={false}/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
import React, { useState, useEffect } from 'react';
import SizeSelectIcon from './SizeSelectIcon';
import { sizeIcons, calcData } from '../../../data/generalCalc';
import InputPill from './InputPill';
import OutputPill from './OutputPill';
import { inputConversion } from '../../../data/generalCalc';

type DogSize = 'sm' | 'md' | 'lg' | 'xl' | '';

function GeneralCalCard() {
  const [initialPageLoad, setInitialPageLoad] = useState<boolean>(true); // no error messages on page load
  const [activeSvg, setActiveSvg] = useState<number | null>(null);
  const [dogSize, setDogSize] = useState<DogSize>('');
  const [dogAgeInput, setDogAgeInput] = useState<number | string | 'cap' | boolean>('');
  const [convertedAge, setConvertedAge] = useState<number | null>(null);

  const handleSizeClick = (index: number, calcKey: DogSize) => {
    setInitialPageLoad(false);
    setActiveSvg(index);
    setDogSize(calcKey);
  };

  const handleAgeInput = (input: number | string) => {
    setInitialPageLoad(false);
    setDogAgeInput(inputConversion(input));
  };

  useEffect(() => {
    if (dogAgeInput && dogSize) {
      const newAge = calcData[dogSize][dogAgeInput as number];
      setConvertedAge(newAge);
    } else {
      setConvertedAge(null);
    }
  }, [dogAgeInput, dogSize]);

  return (
    <div className="flex flex-col w-[90%] align-center bg-card-black rounded-3xl mt-[2rem] text-yellow font-primary overflow-hidden shadow-drop lg:w-[50%]">
      <h2 className="bg-yellow-gradient p-[0.5rem] pt-[1rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] text-center md:text-2xl">
        Calculate dog years to human years
      </h2>
      <div className="flex flex-col items-center p-[1rem] sm:pl-[1.75rem] sm:pr-[1.75rem]">
        <div className="flex self-start items-center">
          <span className="md:text-xl">
            Size of Dog
          </span>
          {!dogSize && !initialPageLoad && <span className="pl-[0.5rem] text-3xl text-error-red">*</span>}
        </div>

        {/* Icon size selection boxes */}
        <div className="w-[100%] flex flex-wrap justify-evenly mt-[0.5rem]">
          {sizeIcons.map((item, index) => (
            <SizeSelectIcon
              icon={item.icon}
              description={item.description}
              handleClick={() => handleSizeClick(index, item.calcKey as DogSize)}
              isActive={activeSvg === index}
              key={item.calcKey}
            />
          ))}
        </div>
        {/* Age input and output pill-looking components */}
        <div className="flex flex-col items-center mt-[1.5rem] mb-[0.5rem] w-[110%]">
          <div className="flex justify-evenly items-center">
            <InputPill handleAgeInput={handleAgeInput} />
            <span className="text-4xl text-blue mr-[0.5rem] ml-[0.5rem] self-end md:text-5xl">
              =
            </span>
            <OutputPill convertedAge={convertedAge} />
          </div>
          {!dogAgeInput && !initialPageLoad && (
          <span className="text-error-red self-start mt-[0.5rem]">
            * Please enter a number
          </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default GeneralCalCard;

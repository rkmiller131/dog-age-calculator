import React, { useState, useEffect } from 'react';
import SizeSelectIcon from './SizeSelectIcon';
import AgeInput from './AgeInput';
import { sizeIcons, calcData } from '../../../data/generalCalc';

type DogSize = 'sm' | 'md' | 'lg' | 'xl' | '';

const GeneralCalCard = () => {
  const [activeSvg, setActiveSvg] = useState<number | null>(null);
  const [dogSize, setDogSize] = useState<DogSize>('');
  const [dogAgeInput, setDogAgeInput] = useState<number | string>('');
  const [convertedAge, setConvertedAge] = useState<number | null>(null);

  // Error messages:
  const [noSizeSelected, setNoSizeSelected] = useState<boolean>(false);

  useEffect(() => {
    if(dogAgeInput) {
      const newAge = calcData[dogSize][dogAgeInput as number]
      setConvertedAge(newAge);
    }
    if(dogSize) {
      setNoSizeSelected(false);
    }
  }, [dogSize, dogAgeInput])

  const handleSizeClick = (index: number, calcKey: DogSize) => {
    setActiveSvg(index);
    setDogSize(calcKey);
  }

  const handleAgeInput = (input: number | string) => {
    setDogAgeInput(input);
  }

  return (
    <div className="flex flex-col w-[90%] align-center bg-card-black rounded-3xl mt-[2rem] text-yellow font-primary overflow-hidden shadow-drop">
      <h2 className="bg-yellow-gradient p-[0.5rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] text-center">
        Calculate dog years to human years
      </h2>
      <div className="flex flex-col items-center p-[0.5rem] sm:p-[1.25rem]">
        <div className="flex self-start items-center">
          <span>Size of Dog</span>
          {noSizeSelected && <span className="pl-[0.5rem] text-3xl text-error-red">*</span>}
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
        {/* Dog age to human age pill looking components */}
        <AgeInput
          dogSize={dogSize}
          handleAgeInput={handleAgeInput}
          humanAge={convertedAge}
          setNoSizeSelected={setNoSizeSelected}
          setConvertedAge={setConvertedAge}
        />
      </div>
    </div>
  );
};

export default GeneralCalCard;
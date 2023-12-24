import React, { useState } from 'react';
import LabInput from './LabInput';
import LabOutput from './LabOutput';

type labCalcCardProps = {

}

const LabCalcCard: React.FC<labCalcCardProps> = () => {
  const [humanAge, setHumanAge] = useState<number | string | null>(null);
  const [badAgeInput, setBadAgeInput] = useState<boolean>(false);

  return (
    <div className="flex flex-col w-[90%] align-center items-center bg-gradient-radial rounded-3xl mt-[2rem] text-drk-blue font-primary overflow-hidden shadow-drop lg:w-[50%] xl:mt-0 xl:justify-between">
      <h2 className="p-[0.5rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] pt-[1rem] text-center leading-7 md:text-2xl xl:text-3xl">
        New, improved formula based on Labradors
      </h2>
      <div className="xl:flex items-end justify-center gap-5">
        <LabInput setHumanAge={setHumanAge} setBadAgeInput={setBadAgeInput} />
        {badAgeInput && (
        <span className="text-error-red mt-[0.1rem]">
          *Please enter a number
        </span>
        )}
        <LabOutput humanAge={humanAge} badInputAge={badAgeInput} />
      </div>
      <span className="opacity-25 mt-[2rem] mb-[1rem] md:text-xl">16ln(age) + 31</span>
    </div>
  );
};

export default LabCalcCard;

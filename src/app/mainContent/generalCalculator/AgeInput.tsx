import React, { Dispatch, SetStateAction, useState } from 'react'
import InputPill from './InputPill'
import OutputPill from './OutputPill';

type AgeInputProps = {
  dogSize: string;
  handleAgeInput: (input: number | string) => void;
  humanAge: number | null;
  setNoSizeSelected: Dispatch<SetStateAction<boolean>>
  setConvertedAge: Dispatch<SetStateAction<number | null>>
}
const AgeInput: React.FC<AgeInputProps> = ({
  dogSize,
  handleAgeInput,
  humanAge,
  setNoSizeSelected,
  setConvertedAge
}: AgeInputProps) => {
  const [badAgeInput, setBadAgeInput] = useState(false);

  if(badAgeInput) {
    setConvertedAge(null);
  }

  return (
    <div className="flex flex-col items-center mt-[1.5rem] mb-[0.5rem] w-[110%]">
      <div className="flex justify-evenly items-center">
        <InputPill
          handleAgeInput={handleAgeInput}
          dogSize={dogSize}
          setNoSizeSelected={setNoSizeSelected}
          setBadAgeInput={setBadAgeInput}
        />
        <span className="text-4xl text-blue mr-[0.5rem] ml-[0.5rem] self-end md:text-5xl">
          =
        </span>
        <OutputPill humanAge={humanAge}/>
      </div>
      {badAgeInput && <span className="text-error-red self-start mt-[0.5rem]">
        * Please enter a number
      </span>}
    </div>
  )
}

export default AgeInput;
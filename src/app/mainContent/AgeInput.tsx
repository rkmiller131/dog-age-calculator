import React, { Dispatch, SetStateAction, useState } from 'react'
import InputPill from './InputPill'
import OutputPill from './OutputPill';

type AgeInputProps = {
  dogSize: string;
  handleAgeInput: (input: number | string) => void;
  humanAge: number | null;
  setNoSizeSelected: Dispatch<SetStateAction<boolean>>
}
const AgeInput: React.FC<AgeInputProps> = ({ dogSize, handleAgeInput, humanAge, setNoSizeSelected }: AgeInputProps) => {
  const [errorInput, setErrorInput] = useState(false);

  return (
    <div className="flex flex-col items-center mt-[1.5rem] mb-[0.5rem] w-[110%]">
      <div className="flex justify-evenly items-center">
        <InputPill handleAgeInput={handleAgeInput} dogSize={dogSize} setNoSizeSelected={setNoSizeSelected} setErrorInput={setErrorInput}/>
        <span className="text-4xl text-blue mr-[0.5rem] ml-[0.5rem] self-end">
          =
        </span>
        <OutputPill humanAge={humanAge}/>
      </div>
      {errorInput && <span className="text-error-red self-start mt-[0.5rem]">* Please enter a number</span>}
    </div>
  )
}

export default AgeInput;
import React, { ChangeEvent, Dispatch, SetStateAction, useState, useEffect } from 'react'

type InputPillProps = {
  handleAgeInput: (input: number | string) => void;
  dogSize: string;
  setNoSizeSelected: Dispatch<SetStateAction<boolean>>
  setErrorInput: Dispatch<SetStateAction<boolean>>
}

const InputPill: React.FC<InputPillProps> = ({ handleAgeInput, dogSize, setNoSizeSelected, setErrorInput }) => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    setNoSizeSelected(false);
    if(inputConversion(input)) {
      handleAgeInput(inputConversion(input));
    }

  }, [dogSize])

  const inputConversion = (val: string | number ) => {
    if (Number(val)) {
      const roundedAge = Math.round(Number(val));
      return roundedAge > 16 ? 'cap' : Math.round(Number(val));
    }
    return false;
  }

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
    if (dogSize) {
      setNoSizeSelected(false);
      if (inputConversion(value)) {
        handleAgeInput(value);
        setErrorInput(false);
      } else {
        setErrorInput(true);
      }
    } else {
      setNoSizeSelected(true);
    }
  }
  return (
    <div className="flex flex-col w-[45%]">
      <span className="self-center mb-[0.5rem]">Dog Age</span>
      <div className="flex border-2 rounded-3xl border-blue justify-between p-[0.5rem] items-center">
        <div className="flex items-center pl-[0.5rem] pr-[0.5rem]">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="#"
            style={{background: 'transparent'}}
            className="w-full bg-transparent border-none focus:outline-none focus:border-blue-500 text-center text-2xl"/>
        </div>
        <span className="text-blue border-l border-blue pl-[0.5rem] pr-[0.5rem]">Yrs</span>
      </div>
    </div>
  )
}

export default InputPill;
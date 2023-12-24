import React, { ChangeEvent } from 'react';

type InputPillProps = {
  handleAgeInput: (input: number | string) => void;
}

// Handles dog age input and updates human age based on valid number entries and a dog size being selected
const InputPill: React.FC<InputPillProps> = ({ handleAgeInput }) => (
  <div className="flex flex-col w-[45%]">
    <label htmlFor="dogAge" className="self-center mb-[0.5rem] md:text-xl">
      Dog Age
    </label>
    <div className="flex border-2 rounded-3xl border-blue justify-between p-[0.5rem] items-center">
      <div className="flex items-center pl-[0.5rem] pr-[0.5rem]">
        <input
          type="text"
          onChangeCapture={(e: ChangeEvent<HTMLInputElement>) => handleAgeInput(e.target.value)}
          placeholder="#"
          style={{ background: 'transparent' }}
          className="w-full bg-transparent border-none focus:outline-none focus:border-blue-500 text-center text-2xl md:text-3xl"
        />
      </div>
      <span className="text-blue border-l border-blue pl-[0.5rem] pr-[0.5rem]">
        Yrs
      </span>
    </div>
  </div>
);

export default InputPill;

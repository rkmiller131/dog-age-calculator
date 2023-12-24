import React, { ChangeEvent } from 'react';

type InputPillProps = {
  handleAgeInput: (input: number | string) => void;
}

// Handles dog age input and updates human age based on valid number entries and a dog size being selected
const InputPill: React.FC<InputPillProps> = ({ handleAgeInput }) => (
  <div className="flex flex-col w-[45%]">
    <label htmlFor="dogAge" className="self-center mb-[0.5rem] md:text-xl 3xl:text-2xl 4xl:text-3xl">
      Dog Age
    </label>
    <div className="flex border-2 rounded-3xl border-blue justify-between p-[0.5rem] items-center 3xl:p-[1.25rem] 3xl:rounded-4xl">
      <div className="flex items-center pl-[0.5rem] pr-[0.5rem]">
        <input
          type="text"
          onChangeCapture={(e: ChangeEvent<HTMLInputElement>) => handleAgeInput(e.target.value)}
          placeholder="#"
          style={{ background: 'transparent' }}
          className="w-full bg-transparent border-none focus:outline-none focus:border-blue-500 text-center text-2xl md:text-3xl 3xl:text-4xl 4xl:text-[3.5rem]"
        />
      </div>
      <span className="text-blue border-l border-blue pl-[0.5rem] pr-[0.5rem] 3xl:text-xl 3xl:pl-[1rem] 4xl:text-3xl">
        Yrs
      </span>
    </div>
  </div>
);

export default InputPill;

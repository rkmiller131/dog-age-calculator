import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';

type LabInputProps = {
  setHumanAge: Dispatch<SetStateAction<number | string | null>>;
  setBadAgeInput: Dispatch<SetStateAction<boolean>>;
}

const LabInput: React.FC<LabInputProps> = ({ setHumanAge, setBadAgeInput }) => {
  const [input, setInput] = useState<string>('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);

    const validResult = Number(value);

    validResult ? setBadAgeInput(false) : setBadAgeInput(true);

    if (validResult) {
      const calculatedHumanAge = Math.round(16 * Math.log(Number(value)) + 31);
      if (calculatedHumanAge < 0) {
        setHumanAge(3);
      } else {
        setHumanAge(calculatedHumanAge);
      }
    }
  };

  return (
    <div className="flex flex-col w-[45%] mt-[1rem] text-orange xl:mt-0 xl:w-[30%]">
      <label htmlFor="dogAge" className="self-center mb-[0.5rem] text-drk-blue md:text-2xl 4xl:text-3xl">
        Dog Age
      </label>
      <div className="flex border-2 rounded-3xl border-drk-blue justify-between p-[0.5rem] items-center 4xl:pt-[1rem] 4xl:pb-[1rem]">
        <div className="flex items-center pl-[0.5rem] pr-[0.5rem]">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="#"
            style={{ background: 'transparent' }}
            className="w-full bg-transparent border-none focus:outline-none focus:border-blue-500 text-center text-2xl md:text-4xl 4xl:text-[3rem]"
          />
        </div>
        <span className="text-drk-blue border-l border-drk-blue pl-[0.5rem] pr-[0.5rem] md:text-xl 4xl:text-3xl">
          Yrs
        </span>
      </div>
    </div>
  );
};

export default LabInput;

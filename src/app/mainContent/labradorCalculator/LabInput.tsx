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
      console.log('valid entry and age is ', calculatedHumanAge);
      setHumanAge(calculatedHumanAge);
    }
  };

  return (
    <div className="flex flex-col w-[45%] mt-[1rem] text-orange">
      <label htmlFor="dogAge" className="self-center mb-[0.5rem] text-drk-blue md:text-2xl">
        Dog Age
      </label>
      <div className="flex border-2 rounded-3xl border-drk-blue justify-between p-[0.5rem] items-center">
        <div className="flex items-center pl-[0.5rem] pr-[0.5rem]">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="#"
            style={{ background: 'transparent' }}
            className="w-full bg-transparent border-none focus:outline-none focus:border-blue-500 text-center text-2xl md:text-4xl"
          />
        </div>
        <span className="text-drk-blue border-l border-drk-blue pl-[0.5rem] pr-[0.5rem] md:text-xl">
          Yrs
        </span>
      </div>
    </div>
  );
};

export default LabInput;

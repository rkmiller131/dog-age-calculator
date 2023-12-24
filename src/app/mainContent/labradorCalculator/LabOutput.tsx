import React from 'react';

type LabOutputProps = {
  humanAge: number | string | null;
  badInputAge: boolean;
}

const LabOutput: React.FC<LabOutputProps> = ({ humanAge, badInputAge }) => (
  <div aria-live="polite" className="flex flex-col w-[45%] mt-[1.5rem] text-orange xl:mt-0 xl:w-[40%]">
    <label htmlFor="humanAge" className="self-center mb-[0.5rem] text-drk-blue md:text-2xl 4xl:text-4xl">Human Age</label>
    <div className="flex border-2 rounded-3xl border-drk-blue justify-between p-[0.5rem] items-center cursor-not-allowed xl:p-[1.5rem] 4xl:p-[3rem]">
      <div className="w-full justify-center flex items-center pl-[0.5rem] pr-[0.5rem]">
        <span className="focus:border-blue-500 text-center text-2xl md:text-4xl xl:text-[4rem]">
          {humanAge && !badInputAge ? humanAge : '##'}
        </span>
      </div>
      <span className="text-drk-blue border-l border-drk-blue pl-[0.5rem] pr-[0.5rem] md:text-xl xl:text-3xl 4xl:text-4xl">Yrs</span>
    </div>
  </div>
);

export default LabOutput;

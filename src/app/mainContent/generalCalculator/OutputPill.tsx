import React from 'react';

type OutputPillProps = {
  convertedAge: number | null;
}

const OutputPill: React.FC<OutputPillProps> = ({ convertedAge }) => (
  <div aria-live="polite" className="flex flex-col w-[45%]">
    <label htmlFor="humanAge" className="self-center mb-[0.5rem] md:text-xl 3xl:text-2xl 4xl:text-3xl">Human Age</label>
    <div className="flex border-2 rounded-3xl border-blue justify-between p-[0.5rem] items-center cursor-not-allowed 3xl:p-[1.25rem] 3xl:rounded-4xl">
      <div className="w-full justify-center flex items-center pl-[0.5rem] pr-[0.5rem] 4xl:pt-[1rem] 4xl:pb-[1rem]">
        <span className="focus:border-blue-500 text-center text-2xl md:text-3xl 3xl:text-4xl 4xl:text-[3.5rem]">
          {convertedAge || '##'}
        </span>
      </div>
      <span className="text-blue border-l border-blue pl-[0.5rem] pr-[0.5rem] 3xl:text-xl 3xl:pl-[1rem] 4xl:text-3xl">Yrs</span>
    </div>
  </div>
);

export default OutputPill;

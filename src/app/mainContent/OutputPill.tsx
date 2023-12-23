import React from 'react'

type OutputPillProps = {
  humanAge: number | null;
}

const OutputPill: React.FC<OutputPillProps> = ({ humanAge }) => {
  return (
    <div className="flex flex-col w-[45%]">
      <span className="self-center mb-[0.5rem]">Human Age</span>
      <div className="flex border-2 rounded-3xl border-blue justify-between p-[0.5rem] items-center cursor-not-allowed">
        <div className="w-full justify-center flex items-center pl-[0.5rem] pr-[0.5rem]">
          <span className="focus:border-blue-500 text-center text-2xl">
            {humanAge ? humanAge : `##`}
          </span>
        </div>
        <span className="text-blue border-l border-blue pl-[0.5rem] pr-[0.5rem]">Yrs</span>
      </div>
    </div>
  )
}

export default OutputPill;
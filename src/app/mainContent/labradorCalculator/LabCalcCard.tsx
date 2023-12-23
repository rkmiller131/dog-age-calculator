import React from 'react'
import LabInput from './LabInput';
import LabOutput from './LabOutput';

type labCalcCardProps = {

}

const LabCalcCard: React.FC<labCalcCardProps> = () => {
  return (
    <div className="flex flex-col w-[90%] align-center bg-gradient-radial rounded-3xl mt-[2rem] text-drk-blue font-primary overflow-hidden shadow-drop">
      <h2 className="p-[0.5rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] text-center">
        New, improved formula based on Labradors
      </h2>
      <LabInput />
      <LabOutput />
      <span className="text-opacity-25">{'16ln(age) + 31'}</span>
    </div>
  );
}

export default LabCalcCard;
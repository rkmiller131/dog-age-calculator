import React, {useState} from 'react';
import SizeSelectIcon from './SizeSelectIcon';
import { sizeIcons } from '../../data/generalCalc';

const PageContent = () => {
  const [activeSvg, setActiveSvg] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveSvg(index);
  }
  return (
    <div className="flex flex-col w-[90%] align-center bg-card-black rounded-3xl mt-[2rem] text-yellow font-primary overflow-hidden shadow-drop">
      <h2 className="bg-yellow-gradient p-[0.5rem] text-xl/8 pr-[2.25rem] pl-[2.25rem] text-center">
        Calculate dog years to human years
      </h2>
      <div className="p-[1.25rem]">
        <span>Size of Dog</span>
        <div className="w-[100%] flex flex-wrap justify-evenly mt-[1rem]">
          {sizeIcons.map((item, index) => (
            <SizeSelectIcon
              icon={item.icon}
              description={item.description}
              handleClick={() => handleClick(index)}
              isActive={activeSvg === index}
              key={item.calcKey}
            />
          ))}
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default PageContent;
import React from 'react'
import SmallDogIcon from '../../components/SmallDogIcon'
import MediumDogIcon from '../../components/MediumDogIcon'
import LargeDogIcon from '../../components/LargeDogIcon'
import GiantDogIcon from '../../components/GiantDogIcon'

type SizeSelectionProps = {
  icon: string;
  description: string;
  isActive: boolean;
  handleClick: () => void;
}
const SizeSelectIcon: React.FC<SizeSelectionProps> = ({ icon, description, handleClick, isActive }: SizeSelectionProps) => {
  let svg;
  let tw;
  switch(icon) {
    case 'smallDog':
      svg = <SmallDogIcon isActive={isActive}/>
      tw = "w-[60%]";
      break;
    case 'mediumDog':
      svg = <MediumDogIcon isActive={isActive}/>
      tw = "w-[80%]";
      break;
    case 'largeDog':
      svg = <LargeDogIcon isActive={isActive}/>
      tw = "w-[100%]";
      break;
    default:
      svg = <GiantDogIcon isActive={isActive}/>
      tw = "w-[100%]";
  }

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center w-[40%] border-2 p-[0.5rem] rounded-lg m-[0.5rem] hover:border-blue hover:text-blue hover:cursor-pointer justify-end ${isActive ? "border-blue text-blue" : "border-yellow"}`}
    >
      <div className={tw}>
        {svg}
      </div>
      <span>{description}</span>
    </div>
  )
}

export default SizeSelectIcon;
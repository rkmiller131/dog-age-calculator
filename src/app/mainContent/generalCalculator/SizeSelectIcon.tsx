import React, { useState } from 'react';
import SmallDogIcon from '../../../components/SmallDogIcon';
import MediumDogIcon from '../../../components/MediumDogIcon';
import LargeDogIcon from '../../../components/LargeDogIcon';
import GiantDogIcon from '../../../components/GiantDogIcon';

type SizeSelectionProps = {
  icon: string;
  description: string;
  isActive: boolean;
  handleClick: () => void;
}

const SizeSelectIcon: React.FC<SizeSelectionProps> = ({
  icon, description, handleClick, isActive,
}: SizeSelectionProps) => {
  // in order to target the child svg to affect fill color, pass down a manual hovered state (see svg components)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  // size of the icon inside its selection box
  let IconComponent;
  let tw;

  switch (icon) {
    case 'smallDog':
      IconComponent = SmallDogIcon;
      tw = 'w-[60%]';
      break;
    case 'mediumDog':
      IconComponent = MediumDogIcon;
      tw = 'w-[80%]';
      break;
    case 'largeDog':
      IconComponent = LargeDogIcon;
      tw = 'w-[100%]';
      break;
    default:
      IconComponent = GiantDogIcon;
      tw = 'w-[100%]';
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`flex flex-col items-center w-[40%] border-2 p-[0.5rem] rounded-lg m-[0.5rem] hover:border-blue hover:text-blue hover:cursor-pointer justify-end ${isActive ? 'border-blue text-blue' : 'border-yellow'} md:text-xl xl:w-[20%] xl:text-sm`}
    >
      <div className={tw}>
        <IconComponent isActive={isActive} isHovered={isHovered} />
      </div>
      <span aria-label={description} role="img">{description}</span>
    </div>
  );
};

export default SizeSelectIcon;

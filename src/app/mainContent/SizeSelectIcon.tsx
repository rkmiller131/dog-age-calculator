import React, { useState } from 'react'
import dynamic from 'next/dynamic'

type SizeSelectionProps = {
  icon: string;
  description: string;
  isActive: boolean;
  handleClick: () => void;
}

const SizeSelectIcon: React.FC<SizeSelectionProps> = ({ icon, description, handleClick, isActive }: SizeSelectionProps) => {

  // in order to target the child svg to affect fill color, pass down a manual hovered state (see svg components)
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const DogIconComponent = dynamic(() =>
    import(`../../components/${icon.charAt(0).toUpperCase()}Icon`)) as React.FC<{ isActive: boolean; isHovered: boolean }>;

  // size of the icon inside its selection box
  const tw = (() => {
    switch(icon) {
      case 'smallDog':
        return "w-[60%]";
      case 'mediumDog':
        return "w-[80%]";
      default:
        return "w-[100%]";
    }
  })();

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={`flex flex-col items-center w-[40%] border-2 p-[0.5rem] rounded-lg m-[0.5rem] hover:border-blue hover:text-blue hover:cursor-pointer justify-end ${isActive ? "border-blue text-blue" : "border-yellow"}`}
    >
      <div className={tw}>
        <DogIconComponent isActive={isActive} isHovered={isHovered}/>
      </div>
      <span>{description}</span>
    </div>
  )
}

export default SizeSelectIcon;
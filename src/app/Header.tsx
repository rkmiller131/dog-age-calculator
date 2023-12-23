import React from 'react'
import Image from 'next/image'

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="self-start flex">
      <div className="relative h-[8rem] w-[8rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] md:left-[-0.5rem]">
        <Image
          src="/dogtag.png"
          fill
          alt="Swinging dog tag"
          className="z-10 motion-reduce animate-swing"
        />
      </div>
      <h1 className="font-secondary text-center text-stroke absolute p-[0.75rem] pr-[1rem] pb-0 pl-[4.625rem] sm:pr-[2rem] sm:text-xl sm:pl-[5rem] md:text-2xl">
        Dog age to human age converter
      </h1>
    </div>
  );
}

export default Header;
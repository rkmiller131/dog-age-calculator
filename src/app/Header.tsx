import React from 'react';
import Image from 'next/image';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => (
  <div className="self-start flex">
    <div className="relative h-[8rem] w-[8rem] sm:h-[9rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] md:left-[-0.5rem] lg:h-[12rem] lg:w-[12rem] xl:h-[15rem] xl:w-[15rem] 3xl:h-[18rem] 3xl:w-[18rem] 4xl:h-[20rem] 4xl:w-[20rem]">
      <Image
        src="/dogtag.png"
        fill
        alt="Swinging dog tag"
        className="z-10 motion-reduce animate-swing"
      />
    </div>
    <h1 className="font-secondary text-center text-stroke absolute p-[0.75rem] pr-[1rem] pb-0 pl-[4.625rem] sm:pr-[2rem] sm:text-xl sm:pl-[5rem] md:text-2xl lg:text-4xl xl:text-[3.25rem] xl:leading-[3.5rem] 2xl:pl-[11rem] 3xl:text-[3.5rem] 3xl:pt-[3rem] 3xl:pl-[15rem] 4xl:text-[4rem] 4xl:pt-[3rem] 4xl:leading-[5rem] 4xl:pl-[18rem]">
      Dog age to human age converter
    </h1>
  </div>
);

export default Header;

import React from 'react'
import Image from 'next/image'

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
  const remValue = 8;
  const imageSize = remValue * 16;
  return (
    <div className="self-start flex">
      <Image
        src="/dogtag.png"
        width={imageSize}
        height={imageSize}
        alt="Smiling dogs"
        className="z-10 motion-reduce animate-swing"
      />
      <h1 className="font-secondary text-center text-stroke absolute p-[0.75rem] pr-[1rem] sm:pr-[2rem] pb-0 pl-[4.625rem]">
        Dog age to human age converter
      </h1>
    </div>
  );
}

export default Header;
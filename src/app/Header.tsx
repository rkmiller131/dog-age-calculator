import React from 'react'
import Image from 'next/image'

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="self-start flex pr-[2rem]">
      <Image
        src="/dogtag.png"
        width={100}
        height={200}
        alt="Smiling dogs"
        className="z-10 motion-reduce animate-swing"
      />
      <h1 className="font-secondary text-center text-stroke absolute p-[0.75rem] pr-[2rem] pb-0 pl-[4.625rem]">
        Dog age to human age converter
      </h1>
    </div>
  );
}

export default Header;
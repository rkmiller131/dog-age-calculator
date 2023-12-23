import React from 'react'
import Socials from './Socials'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="w-full flex self-start justify-evenly bg-gradient pb-[0.5rem] mt-[2rem]">
    {/* <div className="w-full flex self-start justify-evenly absolute bottom-0 bg-gradient pb-[0.5rem]"> */}
      <div className="hidden md:flex align-center">Footer stuff</div>
      <div className="hidden md:flex align-center">VURY LONG PARAGRAPH</div>
      <Socials />
    </div>
  );
}

export default Footer;
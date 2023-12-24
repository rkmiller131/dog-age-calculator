import React from 'react';
import Socials from './Socials';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={`w-full flex self-start items-center justify-evenly bg-gradient pb-[0.5rem] mt-[2rem] font-primary text-faded-blue lg:mt-[4rem]`}>
      {/* <div className="w-full flex self-start justify-evenly absolute bottom-0 bg-gradient pb-[0.5rem]"> */}
      <div className="hidden lg:flex flex-col justify-center align-center">
        <span>Created by Rachel Miller</span>
        <span>2023 California, USA</span>
      </div>
      <div className="hidden xl:flex text-xs w-[55%] align-center">
        <p>We used to think that every human year equated to 7 dog years, but this was just a guess off of overall lifespan: On average, humans live to about 70 years old, and dogs live to about 10 years old. We now know that dogs age rapidly in their first two years of life, and researchers studying Labradors have fine-tuned the formula even more. See the Labrador Study here, and further information here.</p>
      </div>
      <Socials />
    </div>
  );
};

export default Footer;

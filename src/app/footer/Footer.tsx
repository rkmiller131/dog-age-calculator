import React from 'react';
import Socials from './Socials';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={`w-full mt-[4rem] flex self-start items-end justify-evenly bg-gradient pb-[1rem] font-primary text-faded-blue xl:mt-0 xl:h-[20vh] 4xl:pb-[2rem] 4xl:mt-[4rem] 4xl:bg-card-black`}>
      {/* <div className="w-full flex self-start justify-evenly absolute bottom-0 bg-gradient pb-[0.5rem]"> */}
      <div className="hidden lg:flex flex-col justify-center align-center">
        <span>Created by Rachel Miller</span>
        <span>2023 California, USA</span>
      </div>
      <div className="hidden xl:flex text-xs text-center w-[55%] align-center 2xl:w-[60%] 4xl:text-sm">
        <p>We used to think that every human year equated to 7 dog years, but this was just a guess off of overall lifespan: On average, humans live to about 70 years old, and dogs live to about 10 years old. We now know that dogs age rapidly in their first two years of life, and researchers studying Labradors have fine-tuned the formula even more. See the Labrador Study <a className="text-blue underline" href="https://www.biorxiv.org/content/10.1101/829192v1?ct=" target="_blank" rel="noopener noreferrer">here,</a> and further information <a className="text-blue underline" href="https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/#:~:text=As%20a%20general%20guideline%2C%20though,five%20years%20for%20a%20dog." target="_blank" rel="noopener noreferrer">here.</a>
        </p>
      </div>
      <Socials />
    </div>
  );
};

export default Footer;

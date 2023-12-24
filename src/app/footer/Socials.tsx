'use client';

import React from 'react';
import LinkIcon from './LinkIcon';

const Socials: React.FC = () => (
  <div className="flex space-between">
    <LinkIcon
      href="https://www.linkedin.com/in/rachel-miller-mlr/"
      src="/linkedIn.png"
      alt="LinkedIn Social Link"
    />
    <LinkIcon
      href="https://github.com/rkmiller131/dog-age-calculator"
      src="/gitHub.png"
      alt="GitHub Social Link"
    />
    <LinkIcon
      href="https://webdevrachel.com/"
      src="/portfolio.png"
      alt="Link to developer portfolio"
    />
  </div>
);

export default Socials;

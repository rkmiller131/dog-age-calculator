import React from 'react'
import LinkIcon from './LinkIcon'

type SocialsProps = {

}

const Socials: React.FC<SocialsProps> = () => {
  return (
    <div className="flex space-between">
      <LinkIcon
        href={"https://www.linkedin.com/in/rachel-miller-mlr/"}
        src={"/linkedIn.png"}
        alt={"LinkedIn Social Link"}
        width={28}
        height={28}
      />
      <LinkIcon
        href={"https://github.com/rkmiller131"}
        src={"/gitHub.png"}
        alt={"GitHub Social Link"}
        width={28}
        height={28}
      />
      <LinkIcon
        href={"https://webdevrachel.com/"}
        src={"/portfolio.png"}
        alt={"Link to developer portfolio"}
        width={28}
        height={28}
      />
    </div>
  );
}

export default Socials;
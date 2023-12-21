import React from 'react'
import Image from 'next/image'

type LinkIconProps = {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, src, width, height, alt }) => {
  const size = `w-[${width + 6}px] h-[${height + 6}px]`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={`relative flex items-center justify-center rounded m-[0.5rem] ${size} hover:bg-bubble active:bg-bubble`}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="absolute z-10"
        />
      </div>
    </a>
  );
}

export default LinkIcon;
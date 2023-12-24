import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';

type LinkIconProps = {
  href: string;
  src: string;
  alt: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, src, alt }) =>
  // dynamic class names with a default, and dynamic width + 6 that will be incorporated if width is truthy
  // const sizeClasses = classnames(
  //   'w-[34px] h-[34px]', {
  //     [`w-${width + 6}`]: width,
  //     [`h-${height + 6}`]: height,
  //   }
  // )
  (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative flex items-center justify-center rounded m-[0.5rem] md:m-[0.75rem] h-[34px] w-[34px] hover:bg-bubble active:bg-bubble">
        <div className="relative h-[28px] w-[28px] sm:h-[34px] sm:w-[34px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="absolute z-10"
          />
        </div>
      </div>
    </a>
  );

export default LinkIcon;

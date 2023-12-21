import React from 'react'
import classnames from 'classnames'
import Image from 'next/image'

type LinkIconProps = {
  href: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

const LinkIcon: React.FC<LinkIconProps> = ({ href, src, width, height, alt }) => {
  // dynamic class names with a default, and dynamic width + 6 that will be incorporated if width is truthy
  const sizeClasses = classnames(
    'w-[34px] h-[34px]', {
      [`w-${width + 6}`]: width,
      [`h-${height + 6}`]: height,
    }
  )
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={`relative flex items-center justify-center rounded m-[0.5rem] ${sizeClasses} hover:bg-bubble active:bg-bubble`}>
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
"use client"
import { customeBlurDataURL } from '@/utils/constants'
import Image, { ImageProps } from 'next/image'
import { useState } from 'react'



interface Props extends Omit<ImageProps, 'placeholder' | 'quality' | 'layout'> {
  dimensions?: string
  imageStyles?: string
}

const ResponsiveImage: React.FC<Props> = (props) => {
  // ? Props
  const { dimensions, className, src, alt, imageStyles, blurDataURL, ...restProps } = props
  const [isLoading,setIsLoading]= useState(false)

  // ? Render(s)
  return (
    <div className={`relative ${dimensions ?? ''} ${className ?? ''}`} title={alt}>
      <Image
        src={src}
        alt={alt}
        className={`${imageStyles} ${isLoading  ? "" : "blur-sm"}`}
        placeholder="blur"
        blurDataURL={blurDataURL ? 'data:image/png;base64,' + blurDataURL : customeBlurDataURL}
        quality={100}
        fill
        onLoad={()=>setIsLoading(true)}
        {...restProps}
      />
    </div>
  )
}

export default ResponsiveImage

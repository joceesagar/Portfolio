import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import React from "react"

interface Styles {
  containerStyles ?: string;
  imgSrc : string | StaticImport;
}

const DevImage:React.FC<Styles> = ({containerStyles, imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt=""/>
    </div>
  )
}

export default DevImage
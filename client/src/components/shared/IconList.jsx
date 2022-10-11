import React from 'react'
import { FaTwitter, FaEnvelope, FaGithub, FaFacebookF } from "react-icons/fa";

const IconList = () => {
  return (
    <section className="flex items-center gap-2">
    {[<FaFacebookF />, <FaTwitter />, <FaEnvelope />, <FaGithub />].map(
      (item, i) => (
        <span key={i} className="cursor-pointer w-7 h-7 grid place-items-center border border-primary rounded-full text-sm text-blue-400 hover:bg-secondary transition-colors" role={"button"}>{item}</span>
      )
    )}
  </section>
  )
}

export default IconList
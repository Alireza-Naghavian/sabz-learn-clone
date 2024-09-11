"use client";
import React from "react";
type OverLayType = {
  onClose: () => void;
  openCondition: boolean;
  className?: string;
};
function Overlay({ openCondition, onClose, className }: OverLayType) {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={` ${className} 
         fixed w-full h-full ${
           openCondition
             ? " md:backdrop-blur visible opacity-100 "
             : "bg-transparent invisible opacity-0"
         } z-40 bg-black/40 inset-0
         
      transition-all duration-300
        `}
    ></div>
  );
}

export default Overlay;

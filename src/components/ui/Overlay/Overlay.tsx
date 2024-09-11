"use client";
import React from "react";
type OverLayType = {
  onClose: () => void;
  openCondition: boolean;
};
function Overlay({ openCondition, onClose }: OverLayType) {
  return (
    <div
      onClick={() => {
        onClose();
      }}
      className={`
         fixed w-full h-full ${
           openCondition
             ? "bg-black/40 md:backdrop-blur visible"
             : "bg-transparent invisible"
         }
     top-0 left-0  z-40  
      transition-all duration-300
        `}
    ></div>
  );
}

export default Overlay;

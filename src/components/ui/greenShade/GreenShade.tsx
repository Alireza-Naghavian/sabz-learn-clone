import React from "react";

function ColorShade({className}:{className:string}) {
  return (
    <div className={`hidden lg:block absolute  top-0 -translate-x-44 -translate-y-[64%] w-60 h-60  
    opacity-25 blur-[125px] -z-10 rounded-full ${className}`}></div>
  );
}

export default ColorShade;

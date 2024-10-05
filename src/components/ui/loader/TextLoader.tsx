import React from "react";
import Loader from "./Loader";

function TextLoader({ loadingCondition ,className}: { loadingCondition: boolean,className?:string }) {
  return (
    <div className={`${className} flex  gap-x-2 mt-4`}>
      <span>
        <Loader loadingCondition={loadingCondition} />
      </span>
      <span>درحال بارگزاری...</span>
    </div>
  );
}

export default TextLoader;

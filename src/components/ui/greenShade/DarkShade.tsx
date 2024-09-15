import React from "react";

function DarkShade() {
  return (
    <div className="course-content-shadow absolute bottom-0 right-0
     left-0 h-[160px] bg-gradient-to-t from-white dark:from-darker
      from-0% via-white/[55%] dark:via-darker/[55%] via-70% 
      to-white/0 dark:to-darker/0 to-100%"></div>
  );
}

export default DarkShade;

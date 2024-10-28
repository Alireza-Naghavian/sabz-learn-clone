"use client"
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import "./blogStyles.css"
function BlogContent({content}:{content:string}) {
  const [longDesc, setLongDesc] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sanitizedDesc = DOMPurify.sanitize(content);
      setLongDesc(sanitizedDesc);
    }
  }, [content]);
  return (
    <div>
      <div className="wp-content" dangerouslySetInnerHTML={{__html:longDesc}}>
       
      </div>
    </div>
  );
}

export default BlogContent;

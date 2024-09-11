import { LinkType } from "@/types/buttons.t";
import Link from "next/link";
import React from "react";

function SecondaryBtn({ Icon, target, title, className }: LinkType) {
  return (
    <Link href={target} className={`buton-xl button-secondary ${className}`}>
      {title}
       {Icon &&  <Icon className="h-6 w-6"/> }
    </Link>
  );
}

export default SecondaryBtn;

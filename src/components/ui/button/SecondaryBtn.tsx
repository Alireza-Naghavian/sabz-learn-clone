import { LinkType } from "@/types/buttons.t";
import Link from "next/link";
import React from "react";

function SecondaryBtn({ Icon, target, title, className }: LinkType) {
  return (
    <Link href={target} className={`button-xl button-secondary ${className}`}>
       {Icon &&  <Icon className="h-6 w-6"/> }
      {title}
    </Link>
  );
}

export default SecondaryBtn;

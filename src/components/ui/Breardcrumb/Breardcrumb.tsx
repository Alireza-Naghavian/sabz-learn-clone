import React from "react";
import "./breadcrumb.css";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
type BreadcrumbProps = {
  firstTarget: string;
  nestedStep: number;
  nestedLinks: { target: string; title: React.ReactNode }[];
};
const Breardcrumb: React.FC<BreadcrumbProps> = ({
  firstTarget = "/",
  nestedLinks,
  nestedStep,
}) => {
  return (
    <div className="breadcrumb">
        <Link className="breadcrumb__item" href={firstTarget}>
        <HomeIcon className="size-6"/>
      </Link>

           {Array.from({ length: nestedStep }).map((_, index) => (
        <React.Fragment key={index}>
          {nestedLinks[index] && (
            <>
              <Link className="breadcrumb__item" href={nestedLinks[index].target}>

              {nestedLinks[index].title}

              </Link>
            </>
          )}
        </React.Fragment>
      ))}
     
    </div>
  );
};

export default Breardcrumb;

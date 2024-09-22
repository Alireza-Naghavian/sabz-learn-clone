import React from "react";
type HeaderType = {
  title: string;
  children: React.ReactNode;
};
function HeaderAdminLayout({ children, title }: HeaderType) {
  return (
    <div className="relative w-full sm:px-8 px-4 mt-4 py-4  rounded-xl  lg:h-full dark:bg-darker
     bg-gray-300 dark:text-white text-gray-800  overflow-y-auto">
      <div className="">
        <h1 className="w-full text-right text-xl lg:text-3xl
         font-DanaBold text-dark_shade pb-2">
          {title}
        </h1>
      </div>
      {children}
    </div>
  );
}

export default HeaderAdminLayout;

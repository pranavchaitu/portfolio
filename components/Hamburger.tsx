import React, { SetStateAction, useState } from "react";

export const Hamburger = ({ toggle } : {toggle : boolean}) => {
  // Adjusted the height and width to be smaller
  const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div
      className="flex flex-col h-8 w-8 rounded justify-center items-center group" // Adjusted div size
    >
      <div
        className={`${genericHamburgerLine} ${
          toggle
            ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100" // Adjusted translate-y
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          toggle ? "opacity-0" : "opacity-50 group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          toggle
            ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100" // Adjusted translate-y
            : "opacity-50 group-hover:opacity-100"
        }`}
      />
    </div>
  );
};

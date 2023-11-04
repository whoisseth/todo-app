/** @format */

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Buttton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(
        "px-4 whitespace-nowrap text-white bg-green-400 rounded-md hover:bg-green-500 focus:bg-green-600 focus:outline-none active:bg-opacity-90",
        className
      )}
    >
      {children}
    </button>
  );
}

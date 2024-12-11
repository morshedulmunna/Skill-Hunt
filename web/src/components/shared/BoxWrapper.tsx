import React, { ReactNode, HTMLProps } from "react";

interface BoxWrapperProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const BoxWrapper: React.FC<BoxWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={` ${className} shadow-sm border dark:border-gray-800 border-gray-200  bg-white dark:bg-background rounded p-[2px] `}
      {...props}
    >
      {children}
    </div>
  );
};

export default BoxWrapper;

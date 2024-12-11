import React, { ReactNode } from "react";

type MaxWidthWrapperProps = {
  children: ReactNode;
  className?: string;
};

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`mx-auto px-4 2xl:px-0 max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

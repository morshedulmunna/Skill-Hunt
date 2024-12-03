import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <Link className="font-semibold text-xl " href={"/"}>
        Skill Hunt
      </Link>
    </div>
  );
};

export default Logo;

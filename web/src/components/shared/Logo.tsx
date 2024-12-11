import LogoSvgIcon from "@/assets/svg/LogoSvgIcon";
import Link from "next/link";
import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={`${className}`} {...props}>
      <Link
        className="font-semibold flex items-center gap-2 text-xl "
        href={"/"}
      >
        <LogoSvgIcon /> SH
      </Link>
    </div>
  );
};

export default Logo;

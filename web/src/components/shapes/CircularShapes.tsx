import React from "react";

interface CircularShapesProps {
  className?: string;
}

export const CircularShapes: React.FC<CircularShapesProps> = ({
  className,
  ...props
}) => {
  return (
    <>
      <svg
        className={`${className} blur-lg`}
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="545"
        height="545"
        viewBox="0 0 665 667"
        fill="none"
      >
        <g opacity="0.9" filter="url(#filter0_f_165_2945)">
          <circle cx="584.5" cy="584.5" r="107.5" fill="#0146B1" />
        </g>
        <defs>
          <filter
            id="filter0_f_165_2945"
            x="0"
            y="0"
            width="1169"
            height="1169"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="238.5"
              result="effect1_foregroundBlur_165_2945"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

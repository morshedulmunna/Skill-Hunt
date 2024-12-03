import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <MaxWidthWrapper className={"w-full mt-20 pb-20 h-auto"}>
      <div className="max-w-[460px]">
        <div
          className=" text-2xl text-center md:text-start md:text-5xl my-4 md:leading-[60px] tracking-wide font-semibold"
          itemType="Heading"
        >
          Jobs and Talents at Your Fingertips
        </div>
        <p className="text-sm text-center md:text-base md:text-start">
          Connect with top Employee and Company on our platform! find your
          perfect match for your next milestone.
        </p>
      </div>

      <div className="max-w-[200px] mt-12">
        <div className="flex items-center mb-1">
          <div className="w-8  h-8 rounded-full border border-white p-2 bg-red-200"></div>
          <div className="w-8 -ml-2 h-8 rounded-full border border-white p-2 bg-red-200"></div>
          <div className="w-8 -ml-2 h-8 rounded-full border border-white p-2 bg-red-200"></div>
        </div>

        <p>
          Over <span className="text-primary font-semibold">12800+</span>{" "}
          Employee get their jobs from us!!
        </p>
      </div>
    </MaxWidthWrapper>
  );
}

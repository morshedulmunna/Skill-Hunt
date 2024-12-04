import React from "react";
import MaxWidthWrapper from "./shared/MaxWidthWrapper";
import BoxWrapper from "./shared/BoxWrapper";
import SearchingSection from "./SearchingSection";
import { getCategories } from "@/actions/action";
import HeroIllustratorSvgIcon from "@/assets/svg/HeroIllustratorSvgIcon";

type Props = {};

export default async function HeroSection({}: Props) {
  return (
    <MaxWidthWrapper
      className={
        "w-full flex justify-center flex-col lg:flex-row gap-0 lg:gap-16 items-center mt-20 pb-20 h-auto"
      }
    >
      <div className="w-full lg:w-1/2">
        <div className="max-w-[460px]">
          <div
            className=" text-2xl text-center md:text-start md:text-4xl my-4 md:leading-[50px] tracking-wide font-semibold"
            itemType="Heading"
          >
            Find a Jobs That Suits your interest & skills
          </div>
          <p className="text-sm text-gray-500 text-center md:text-base md:text-start">
            Unlock opportunities and connect with leading employers and
            companies on our platform. Explore job listings that match your
            unique skills.
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
      </div>

      <div className="w-full  h-full lg:w-1/2">
        <HeroIllustratorSvgIcon />
      </div>
    </MaxWidthWrapper>
  );
}

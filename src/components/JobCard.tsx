import ArrowSvgIcon from "@/assets/svg/ArrowSvgIcon";
import BookMarkIconSvg from "@/assets/svg/BookMarkIconSvg";
import CalenderSvgIcon from "@/assets/svg/CalenderSvgIcon";
import DollarSvgIcon from "@/assets/svg/DollarSvgIcon";
import LocationIconSvg from "@/assets/svg/LocationIconSvg";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const JobCard: React.FC<any> = ({ job, selectJobId }) => {
  const {
    id,
    title,
    company,
    details,
    preferred_type,
    type,
    salary,
    timePosted,
    applicants,
  } = job;
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row p-4 items-end md:items-center lg:justify-center group cursor-pointer">
        <div className="flex flex-col lg:flex-row justify-start gap-2 items-start">
          <div className="min-w-20 min-h-20 max-w-20 max-h-20 rounded bg-gray-100">
            <Image
              src={company.logo}
              alt="company_logo"
              width={500}
              height={500}
            />
          </div>
          <div>
            <p className="mb-1 group-hover:text-blue-500 group-hover:underline">
              {company.name}
            </p>
            <p className="text-base group-hover:text-blue-500 group-hover:underline  font-semibold">
              {title}
              <span className="inline-block ml-2 font-bold dark:bg-primary-lightest/20 bg-primary-lightest/50  px-2 py-1 rounded-lg text-xs">
                {preferred_type}
              </span>
            </p>
            <div className="flex items-center flex-wrap gap-2 mt-2 text-sm">
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <LocationIconSvg /> <span>{details.location}</span>{" "}
              </div>
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <DollarSvgIcon /> <span>{salary}</span>
              </div>
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <CalenderSvgIcon /> <span>{applicants}</span>
              </div>
            </div>
            <p className="text-xs max-w-[80%] mt-2 font-thin line-clamp-2 dark:text-gray-400 text-gray-500">
              {details.jobDescription}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-primary-base mt-6 text-white flex items-center gap-2 px-4 py-2 rounded text-sm">
            <button className="whitespace-nowrap " type="button">
              Apply Now
            </button>
            <ArrowSvgIcon className="animate-pulse" />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;

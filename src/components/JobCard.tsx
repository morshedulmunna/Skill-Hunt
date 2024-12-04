import CalenderSvgIcon from "@/assets/svg/CalenderSvgIcon";
import DollarSvgIcon from "@/assets/svg/DollarSvgIcon";
import LocationIconSvg from "@/assets/svg/LocationIconSvg";
import React from "react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: {
      name: string;
    };
    description: string;
    degree: string;
    type: string[];
    salary: string;
    timePosted: string;
  };
  selectJobId: string;
}

const JobCard: React.FC<any> = ({ job, selectJobId }) => {
  const { id, title, company, description, degree, type, salary, timePosted } =
    job;
  const isSelected = id === selectJobId;

  return (
    <>
      <div className="flex justify-between p-4 items-center group cursor-pointer">
        <div className="flex justify-start gap-2 items-start">
          <div className="w-20 h-16 rounded bg-gray-100"></div>
          <div>
            <p className="text-base group-hover:text-blue-500 group-hover:underline  font-semibold">
              Senior UI UX Designer <span>Remote</span>
            </p>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <LocationIconSvg /> <span>Australia</span>{" "}
              </div>
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <DollarSvgIcon /> <span>500</span>{" "}
              </div>
              <div className="text-xs dark:text-tx-color text-gray-500 flex justify-start items-center gap-1">
                <CalenderSvgIcon /> <span>4 Days Remaining</span>{" "}
              </div>
            </div>
            <p className="text-xs mt-2 font-thin line-clamp-2 dark:text-tx-color text-gray-500">
              Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
              sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
              laborum tempor Lorem incididunt.
            </p>
          </div>
        </div>
        <div>right</div>
      </div>
    </>
  );
};

export default JobCard;

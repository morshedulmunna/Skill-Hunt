import React from "react";

// interface JobCardProps {
//   job: {
//     id: string;
//     title: string;
//     company: {
//       name: string;
//     };
//     description: string;
//     degree: string;
//     type: string[];
//     salary: string;
//     timePosted: string;
//   };
//   selectJobId: string;
// }

const JobCard: React.FC<any> = ({ job, selectJobId }) => {
  const { id, title, company, description, degree, type, salary, timePosted } =
    job;
  const isSelected = id === selectJobId;

  return (
    <div
      className={`"w-full hover:bg-gray-200/20 hover:shadow-md cursor-pointer transition-all ease-linear  max-w-xs mx-auto bg-white  border border-gray-200/50 rounded-lg p-3 relative",
        ${isSelected && "bg-JobCardHove"}`}
    >
      {/* Bookmark Icon */}
      <div className="absolute top-3 right-3">
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M6 2c-1.104 0-2 .896-2 2v18l8-4 8 4v-18c0-1.104-.896-2-2-2h-12zm0 2h12v15.234l-6-3-6 3v-15.234z" />
          </svg>
        </button>
      </div>

      {/* Company Logo */}
      <div className="flex items-center mb-2">
        <div>
          <h3
            className={`text-lg group-hover:text-white font-semibold,
              ${isSelected && "text-white"}`}
          >
            {title}
          </h3>
          <p className="text-gray-500 lg group-hover:text-gray-200 text-xs">
            {company?.name}
          </p>
          <p className="text-gray-400 text-xs">{degree}</p>
          <p className="text-gray-400 text-xs">{description}</p>
        </div>
      </div>

      {/* Job Type Tags */}
      <div className="flex space-x-2 mt-2">
        {type.map((each: any) => (
          <span
            key={each}
            className="text-2xs font-medium bg-gray-100 text-gray-800  px-2 rounded-full"
          >
            {each}
          </span>
        ))}
      </div>

      {/* Salary & Time Posted */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex justify-start gap-1 items-center">
          <p
            className={` text-sm font-semibold  text-indigo-900 group-hover:text-gray-300,
             ${isSelected && "text-white"}`}
          >
            {salary}
          </p>
        </div>
        <p className="text-gray-400 group-hover:text-gray-300 text-xs">
          {timePosted}
        </p>
      </div>
    </div>
  );
};

export default JobCard;

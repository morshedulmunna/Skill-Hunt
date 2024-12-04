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
      <div className="flex justify-between p-4 items-center">
        <div className="flex justify-start gap-2 items-start">
          <div className="w-14 h-14 rounded bg-gray-100"></div>
          <div>
            <p>
              Senior UI UX Designer <span>Remote</span>
            </p>
            <div>
              <div className="text-xs dark:text-gray-700 text-gray-500">
                Lo <span>Australia</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>right</div>
      </div>
    </>
  );
};

export default JobCard;

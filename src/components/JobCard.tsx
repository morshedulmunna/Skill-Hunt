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
      <div>
        <div>
          <div className="w-12 h-12 rounded bg-gray-100"></div>
          <div>
            <p>
              Senior UI UX Designer <span>Remote</span>
              <div>
                <div>
                  Lo <span>Australia</span>{" "}
                </div>
              </div>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default JobCard;

"use client";
import { getJobListFn } from "@/actions/getJobList";
import LocationIconSvg from "@/assets/svg/LocationIconSvg";
import { API_URL } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ScrollingItems = () => {
  const [jobData, setJobData] = useState([]);
  const url = `${API_URL}/api/jobs/get-jobs?limit={${8}}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = (await getJobListFn(url)).jobList;
      setJobData(response);
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {jobData.slice(0, 9).map((each: any, index) => (
        <Link key={index} href={`/job-details?id=${each.id}`}>
          <div
            className={` item item${
              index + 1
            } flex-shrink-0 cursor-pointer flex justify-between items-start flex-col p-4 w-64 border dark:border-gray-800 h-40 bg-transparent rounded-lg `}
          >
            <div className="flex justify-between w-full items-start">
              <div>
                <h3 className="text-lg line-clamp-1">{each.title}</h3>
                <div className="flex text-xs gap-2 mt-1">
                  <button className="text-2xs font-semibold bg-primary-lighter text-black-dark px-2 py-0.5 rounded-full">
                    {each?.preferred_type}
                  </button>
                  <p className="text-primary-light">Salary: {each?.salary}</p>
                </div>
              </div>

              <button className="text-xs bg-orange-500 px-2 rounded-full -mt-2">
                Features
              </button>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-12 rounded  h-12 border dark:border-gray-800">
                <Image
                  loading="lazy"
                  height={500}
                  width={500}
                  src={each?.company?.logo}
                  alt="logo"
                />
              </div>
              <div>
                <h4 className="mb-1 line-clamp-1">{each?.company?.name}</h4>
                <div className="flex items-center gap-2 text-xs">
                  <LocationIconSvg />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ScrollingItems;

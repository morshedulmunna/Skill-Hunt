"use client";

import { getJobListFn } from "@/actions/getJobList";
import LocationIconSvg from "@/assets/svg/LocationIconSvg";
import { API_URL } from "@/constant";
import React, { useEffect, useState, useRef } from "react";

const AutoPlayCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null) as any;

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current && !isHovered) {
        carouselRef.current.scrollLeft += 5;
      }
    };

    const interval = setInterval(scrollCarousel, 10);

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const url = `${API_URL}/api/jobs/get-jobs`;
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = (await getJobListFn(url)).jobList;
      setJobData(response);
    };
    fetchData();
  }, []);

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={carouselRef}
        className="flex gap-4 whitespace-nowrap overflow-x-scroll scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Sample items */}
        {jobData.map((each, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-between items-start flex-col p-4 w-64 border dark:border-gray-800 h-40 bg-transparent rounded-lg "
          >
            <div>
              <h3 className="text-lg line-clamp-1">
                Techical Support Specialist
              </h3>
              <div className="flex text-xs gap-2 mt-1">
                <button className="text-2xs font-semibold bg-primary-lighter text-black-dark px-2 py-0.5 rounded-full">
                  PART-TIME
                </button>
                <p className="text-primary-light">Salary: $25000 - $25000</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-12 rounded  h-12 border dark:border-gray-800"></div>
              <div>
                <h4 className="mb-1 line-clamp-1">Google Inc.</h4>
                <div className="flex items-center gap-2 text-xs">
                  <LocationIconSvg />
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Optional gradient effect for edges */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r dark:from-gray-100/10 from-gray-100 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l dark:from-gray-100/10 from-gray-100 to-transparent pointer-events-none" />
    </div>
  );
};

export default AutoPlayCarousel;

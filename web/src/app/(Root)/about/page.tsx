import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-[#111b21] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-extrabold text-center text-gray-900 dark:text-white sm:text-4xl">
            About Us
          </h2>
          <div className="mt-8 text-lg text-gray-700 dark:text-gray-300">
            <p className="max-w-3xl mx-auto text-sm text-center">
              We are a team of professionals dedicated to helping job seekers
              find their dream job by providing them with the best resources and
              tools available. Our platform offers personalized job
              recommendations, application tracking, and resume-building
              features to make the job hunting process seamless and effective.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-[#1f2a2e] p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 text-sm dark:text-gray-300">
                Our mission is to empower job seekers by providing them with a
                seamless job search experience through personalized
                recommendations and powerful tools that make the application
                process more efficient.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1f2a2e] p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 text-sm dark:text-gray-300">
                We envision a world where everyone can find their ideal job with
                ease and confidence, transforming the job market into a more
                accessible and fair place for all.
              </p>
            </div>
            <div className="bg-white dark:bg-[#1f2a2e] p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Our Values
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>- Integrity</li>
                <li>- Empowerment</li>
                <li>- Innovation</li>
                <li>- Diversity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 border dark:border-gray-800  dark:bg-[#111b21]  py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl font-extrabold sm:text-2xl">
            Join Us in the Journey
          </h2>
          <p className="mt-4 text-xs">
            If you're looking for a platform that will support you every step of
            the way in your job search, you've come to the right place. Get
            started today and find the perfect job!
          </p>
        </div>
      </div>
    </>
  );
};
export default page;

import { jobDetailsFn } from "@/actions/getJobDetails";
import ArrowSvgIcon from "@/assets/svg/ArrowSvgIcon";
import ApplyButton from "@/components/ApplyButton";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { API_URL } from "@/constant";
import Image from "next/image";
import React from "react";

type Props = {
  searchParams: Promise<any>;
};

export default async function jobDetailsPage({ searchParams }: Props) {
  const { id } = await searchParams;
  const jobDetails = await jobDetailsFn(id);

  const {
    company,
    details,
    preferred_type,
    salary,
    title,
    description,
    applicants,
  } = jobDetails.results;
  return (
    <>
      <div className="py-6 my-4  p-4 rounded bg-gray-100 dark:bg-gray-800/80 shadow-sm">
        <MaxWidthWrapper>
          <h2 className="text-xl font-semibold">
            {" "}
            <span className="text-sm text-gray-500">At</span> {company.name}
          </h2>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="w-full">
        <div className="flex mb-12  flex-col sm:flex-row justify-between sm:items-start w-full">
          <div className="flex flex-wrap gap-2 items-start justify-start">
            <div className="min-w-20 min-h-20 flex justify-center items-center max-w-20 max-h-20 rounded bg-gray-100">
              <Image
                src={company.logo}
                alt="company_logo"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h4 className="font-semibold text-xl mb-1">{title}</h4>
              <div className="text-sm flex flex-wrap items-center gap-2">
                <p>at {company.name}</p>
                <button
                  className="bg-primary-base capitalize text-white px-2 py-0 rounded-lg text-2xs font-semibold"
                  type="button"
                >
                  {details.positionType}
                </button>
                <button
                  className="bg-red-400/20 px-2 py-1 rounded-full capitalize text-xs font-semibold"
                  type="button"
                >
                  {preferred_type}
                </button>
              </div>
            </div>
          </div>
          <ApplyButton />
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12  order-2 lg:order-1 lg:col-span-8">
            <h4 className="font-semibold mb-2">Job Description</h4>
            <div className="text-sm lg:text-base">
              <p>{details.jobDescription.slice(0, 220)}</p>
              <p className="py-4">{details.jobDescription.slice(220, 520)}</p>
              <p className="py-4">{details.jobDescription.slice(520, 820)}</p>
              <p className="py-4">{details.jobDescription.slice(820)}</p>
            </div>

            <h4 className="font-semibold mb-4">Requirements</h4>
            <ul className="ml-6 text-sm lg:text-base">
              {details.responsibilities.map((each: string, index: number) => (
                <li className="list-disc pb-2" key={index}>
                  {each}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold mt-12 mb-4">Qualifications</h4>
            <ul className="ml-6 text-sm lg:text-base">
              {details.qualifications.map((each: string, index: number) => (
                <li className="list-disc pb-2" key={index}>
                  {each}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-4 order-1 lg:order-2">
            <BoxWrapper>
              <div className="p-4 flex justify-between items-center">
                <div className="flex justify-center items-center flex-col gap-2">
                  <p className="capitalize font-semibold">salary (USD)</p>
                  <p className="text-2xl text-green-500 font-bold">{salary}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Monthly pay
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col gap-2">
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 27.3125L4.75 29.6875V8.3125L14.25 5.9375"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.75 32.0625L14.25 27.3125V5.9375L23.75 10.6875V32.0625Z"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23.75 10.6875L33.25 8.3125V29.6875L23.75 32.0625"
                      stroke="#0A65CC"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-xl">Job Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {details.location}
                  </p>
                </div>
              </div>
            </BoxWrapper>

            <BoxWrapper className="mt-4">
              <div className="p-4">
                <h4 className="font-semibold mb-2"> Company Profile </h4>
                <h2 className="text-center text-2xl font-bold">
                  {company.name}
                </h2>
                <div className="flex justify-between pt-2">
                  <div className="flex flex-col items-center">
                    <svg
                      width="25"
                      height="28"
                      viewBox="0 0 25 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.6665 27C18.7416 27 23.6665 22.0751 23.6665 16C23.6665 9.92487 18.7416 5 12.6665 5C6.59137 5 1.6665 9.92487 1.6665 16C1.6665 22.0751 6.59137 27 12.6665 27Z"
                        stroke="#0A65CC"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M12.6665 16L17.6163 11.0502"
                        stroke="#0A65CC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.6665 1H15.6665"
                        stroke="#0A65CC"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="font-semibold">Founded</p>
                    <p className="text-sm">{company.founded}</p>
                  </div>
                </div>
                <p className="text-xl font-semibold mt-4">Mission</p>
                <p className="text-sm">{company.mission}</p>
              </div>
            </BoxWrapper>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

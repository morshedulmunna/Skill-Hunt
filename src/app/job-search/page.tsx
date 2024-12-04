import FilterComponents from "@/components/FilterComponents";
import JobCard from "@/components/JobCard";
import JobSearchPagination from "@/components/JobSearchPagination";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { SERVER_HOST } from "@/constant";
import { NextPage } from "next";

type Props = {
  searchParams: Promise<any>;
};

const JobSearchPage: NextPage<Props> = async ({ searchParams }) => {
  const { query, location, category, page, limit } = await searchParams;

  //Generate params object
  const params = Object.entries({ query, location, category, page, limit })
    .filter(([_, value]) => value !== undefined)
    .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

  const queryParams = new URLSearchParams(params).toString();
  const url = `${SERVER_HOST}/jobs/get-jobs?${queryParams}`;

  let jobList = [] as [];
  let totalCount = 0;
  let countriesOptions = [] as any;
  let categoriesOptions = [] as any;

  try {
    // fetching Job list
    const res = await fetch(url);
    const data = await res.json();

    jobList = data?.results?.jobList;
    totalCount = data?.results?.pagination?.totalResults;

    const countries = await fetch(`${SERVER_HOST}/location-list`);
    const response = (await countries.json()) as any;
    countriesOptions = response.results.locationOption;

    const categoryResponse = await fetch(`${SERVER_HOST}/categoris-list`);
    const categoriesResponse = (await categoryResponse.json()) as any;
    categoriesOptions = categoriesResponse.results.categoriesListOption;
  } catch (error) {
    console.error("Failed to fetch job list:", error);
  }

  return (
    <>
      <MaxWidthWrapper className="mb-12 h-full mt-6">
        <section className="h-full grid gap-2 grid-cols-12 w-full">
          <div className=" col-span-12 lg:col-span-3 h-full bg-foreground dark:bg-background dark:shadow shadow-sm border dark:border-gray-200/10 border-gray-200  p-4 rounded-md">
            <FilterComponents categoriesOptions={categoriesOptions} />
          </div>
          <div className=" col-span-12 flex flex-col h-full lg:col-span-9 overflow-y-auto lg:pr-16 space-y-2  gap-2 ">
            <div className="flex-1 space-y-4">
              <h2 className="text-primary-base font-semibold">
                Total List of Jobs: {totalCount}
              </h2>
              {jobList.length === 0 && (
                <p className="text-center text-sm text-gray-500">
                  No jobs found. Please try again.
                </p>
              )}
              {jobList?.map((each, index) => (
                <BoxWrapper key={index} className="w-full p-4">
                  <JobCard job={each} key={index} />
                </BoxWrapper>
              ))}
            </div>
            <JobSearchPagination totalCount={totalCount} />
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default JobSearchPage;

import { filterJobs, getJobList } from "@/actions/action";
import JobCard from "@/components/JobCard";
import JobSearchPagination from "@/components/JobSearchPagination";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { NextPage } from "next";

type Props = {
  searchParams: Promise<any>;
};

const JobSearchPage: NextPage<Props> = async ({ searchParams }) => {
  const { query, location, category, page } = await searchParams;

  let jobList = [] as [];
  let totalCount = 0;

  try {
    // Filter jobs based on query, location, and category
    if (query || location || category) {
      const response = (await filterJobs({
        query,
        location,
        category,
        page,
      })) as any;
      jobList = response.results as [];
      totalCount = response?.pagination?.totalResults || 0;
    } else {
      const response = (await getJobList(page)) as any;
      jobList = response.results as [];
      totalCount = response?.pagination?.totalResults || 0;
      console.log(response, "job list response");
    }
  } catch (error) {
    console.error("Failed to fetch job list:", error);
  }

  return (
    <>
      <MaxWidthWrapper className="mb-12 h-full mt-6">
        <section className="h-full grid gap-2 grid-cols-12 w-full">
          <div className=" col-span-12 lg:col-span-3 h-full bg-foreground dark:bg-background dark:shadow shadow-sm border dark:border-gray-200/10 border-gray-200  p-4 rounded-md">
            Filter
          </div>
          <div className=" col-span-12 flex flex-col h-full lg:col-span-9 overflow-y-auto lg:pr-16 space-y-2  gap-2 ">
            <div className="flex-1">
              <h2 className="text-primary-base font-semibold">
                {totalCount} Jobs
              </h2>
              {jobList.map((each, index) => (
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

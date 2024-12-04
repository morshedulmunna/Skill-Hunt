import { filterJobs, getJobList } from "@/actions/action";
import JobCard from "@/components/JobCard";
import BoxWrapper from "@/components/shared/BoxWrapper";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { GetServerSideProps, NextPage } from "next";

type Props = {
  searchParams: Promise<any>;
};

const JobSearchPage: NextPage<Props> = async ({ searchParams }) => {
  const { query, location, category } = await searchParams;

  let jobList = [] as [];

  try {
    // Filter jobs based on query, location, and category
    if (query || location || category) {
      jobList = (await filterJobs({ query, location, category })).results as [];
    } else {
      jobList = (await getJobList()).results as [];
    }
  } catch (error) {
    console.error("Failed to fetch job list:", error);
  }
  console.log(jobList);

  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-6">
        <section className="h-full grid gap-2 grid-cols-12 w-full">
          <div className="col-span-3 h-full bg-foreground dark:bg-background dark:shadow shadow-sm border-r border-l border-b dark:border-gray-200/10 border-gray-200  p-4 rounded-md">
            Filter
          </div>
          <div className="col-span-9 overflow-y-auto pr-16 space-y-2  gap-2 ">
            <h2 className="text-primary-base font-semibold"> 3177 Jobs</h2>
            {jobList.map((each, index) => (
              <BoxWrapper key={index} className="w-full p-4">
                <JobCard job={each} key={index} />
              </BoxWrapper>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default JobSearchPage;

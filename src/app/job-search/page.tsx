import JobCard from "@/components/JobCard";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { GetServerSideProps, NextPage } from "next";

type Props = {
  searchParams: Promise<any>;
};

const JobSearchPage: NextPage<Props> = async ({ searchParams }) => {
  const { query, location, category } = await searchParams;

  console.log(query, location, category);

  return (
    <>
      <MaxWidthWrapper>
        <section className="h-full grid gap-2 grid-cols-12 w-full">
          <div className="col-span-2 h-full bg-foreground dark:bg-background dark:shadow shadow-sm border-r border-l border-b dark:border-gray-200/10 border-gray-200  p-4 rounded-md">
            Filter
          </div>
          <div className="col-span-7  gap-2 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
              {[].map((each, index) => (
                <JobCard job={{}} />
              ))}
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default JobSearchPage;

import MaxWidthWrapper from "../shared/MaxWidthWrapper";

function JobCardSkeleton() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-6">
        <section className="h-full grid gap-2 grid-cols-12 w-full">
          <div className=" col-span-12 lg:col-span-3 animate-pulse h-full bg-foreground dark:bg-background dark:shadow shadow-sm border border-b dark:border-gray-200/10 border-gray-200  p-4 rounded-md">
            {/* Filter */}
          </div>
          <div className=" col-span-12 lg:col-span-9 overflow-y-auto lg:pr-16 space-y-2  gap-2 ">
            <h2 className=" w-20 h-8 rounded bg-gray-200 dark:bg-gray-700 animate-pulse"></h2>
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex border rounded dark:border-gray-700 justify-between p-4 items-center group cursor-pointer animate-pulse"
              >
                <div className="flex justify-start gap-2 items-start">
                  <div className="w-20 h-16 rounded bg-gray-200 dark:bg-gray-700"></div>
                  <div className="flex flex-col space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-36"></div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded "></div>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="flex gap-2 w-full">
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
              </div>
            ))}

            {/* <Pagination numberOfData={50} limits={5} className="float-right" /> */}
            <div className="flex gap-2 flex-wrap justify-end items-center">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
}

export default JobCardSkeleton;

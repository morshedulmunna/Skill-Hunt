let jobList = [] as any;
let totalCount = 0;

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getJobListFn(url: string) {
  try {
    // Fetching job list
    const data = await fetchData(url);
    jobList = data?.results?.jobList;
    totalCount = data?.results?.pagination?.totalResults;
  } catch (error) {
    console.error("Failed to fetch job list:", error);
    jobList = [];
    totalCount = 0;
  }

  return { jobList, totalCount };
}

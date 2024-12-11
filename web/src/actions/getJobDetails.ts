import { API_URL } from "@/constant";

export const jobDetailsFn = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/api/jobs/job-details?id=${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error:", errorData.message);
      return;
    }

    const jobDetails = await response.json();
    return jobDetails;
  } catch (error) {
    console.error("Error fetching job details:", error);
    return null;
  }
};

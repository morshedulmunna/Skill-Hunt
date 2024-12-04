import fs from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

type JobListResponse = {
  message: string;
  results?: any[] | {};
  success: boolean;
  statusCode: number;
  pagination?: {};
};

export const getJobList = (
  page: number = 1,
  limit: number = 5
): Promise<JobListResponse> => {
  return new Promise((resolve, reject) => {
    try {
      const filePath = path.join(
        process.cwd(),
        "public",
        "assets",
        "job-data.json"
      );

      fs.readFile(filePath, "utf-8")
        .then((fileData) => {
          // Parse JSON data
          const data = JSON.parse(fileData);

          // Calculate start and end indices for pagination
          const startIndex = (page - 1) * limit;
          const endIndex = page * limit;

          // Get the paginated data
          const paginatedData = data.slice(startIndex, endIndex);

          resolve({
            message: "Job list fetched successfully",
            results: paginatedData,
            success: true,
            statusCode: 200,
            pagination: {
              page,
              limit,
              totalResults: data.length,
              totalPages: Math.ceil(data.length / limit),
            },
          });
        })
        .catch((err) => {
          reject({
            message: "Failed to fetch job list",
            success: false,
            statusCode: 500,
          });
        });
    } catch (error) {
      reject({
        message: "Failed to fetch job list",
        success: false,
        statusCode: 500,
      });
    }
  });
};

export const saveJobPost = async (newJob: any): Promise<JobListResponse> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "job-data.json"
    );

    // Read  data asynchronously
    const fileData = await fs.readFile(filePath, "utf-8");

    let data = JSON.parse(fileData);

    newJob.id = uuidv4();
    data.push(newJob);

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return {
      message: "Job post saved successfully",
      results: newJob,
      success: true,
      statusCode: 201,
    };
  } catch (error) {
    console.error("Error adding job post:", error);
    return {
      message: "Failed to save job post",
      success: false,
      statusCode: 500,
    };
  }
};

export const updateJobPost = async (
  updatedJob: any
): Promise<JobListResponse> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "job-data.json"
    );

    const fileData = await fs.readFile(filePath, "utf-8");

    let data = JSON.parse(fileData);

    const index = data.findIndex((job: any) => job.id === updatedJob.id);

    if (index === -1) {
      return {
        message: "Job post not found",
        success: false,
        statusCode: 404,
      };
    }

    data[index] = updatedJob;

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return {
      message: "Job post updated successfully",
      results: updatedJob,
      success: true,
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error updating job post:", error);
    return {
      message: "Failed to update job post",
      success: false,
      statusCode: 500,
    };
  }
};

export const getJobDetails = async (
  id: string | number
): Promise<JobListResponse> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "job-data.json"
    );

    const fileData = await fs.readFile(filePath, "utf-8");

    const data = JSON.parse(fileData);

    // Find the job with the matching id
    const job = data.find((job: any) => job.id === id);

    if (!job) {
      return {
        message: "Job not found",
        success: false,
        statusCode: 404,
      };
    }

    return {
      message: "Job details retrieved successfully",
      results: job,
      success: true,
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error retrieving job details:", error);
    return {
      message: "Failed to retrieve job details",
      success: false,
      statusCode: 500,
    };
  }
};

export const deleteJobById = async (
  id: number | string
): Promise<JobListResponse> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "job-data.json"
    );

    // Fetch the current job list
    const jobListResponse = await getJobList();

    if (!jobListResponse.success) {
      throw new Error(jobListResponse.message);
    }

    const job = jobListResponse.results as [
      {
        id: number | string;
      }
    ];

    // Filter out the job with the given ID
    const updatedJobs = job.filter((job) => job.id !== id);

    // Write the updated job list back to the file
    await fs.writeFile(filePath, JSON.stringify(updatedJobs, null, 2), "utf-8");

    return {
      message: `Job with ID ${id} deleted successfully`,
      results: updatedJobs,
      success: true,
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error deleting job:", error);
    return {
      message: `Failed to delete job with ID ${id}`,
      results: [],
      success: false,
      statusCode: 500,
    };
  }
};

export const getCountryList = async (): Promise<JobListResponse> => {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "country.list.json"
    );

    // Read Data from JSON File && passing
    const countryData = await fs.readFile(filePath, "utf-8");
    const countries = JSON.parse(countryData);

    return {
      message: "Filtered jobs retrieved successfully",
      results: countries,
      success: true,
      statusCode: 200,
    };
  } catch (error) {
    console.error("Error filtering jobs:", error);
    return {
      message: "Failed to filter jobs",
      success: false,
      statusCode: 500,
    };
  }
};

import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { ApiResponse } from "@/utils/apiResponse";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const queryParams = new URLSearchParams(url.search);

    // Extract filters from query parameters
    const filters = {
      query: queryParams.get("query") || "",
      location: queryParams.get("location") || "",
      category: queryParams.get("category") || "",
      page: Number(queryParams.get("page")) || 1,
      limit: Number(queryParams.get("limit")) || 8,
    };

    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "job-data.json"
    );

    // Read Data from JSON File
    const fileData = await fs.readFile(filePath, "utf-8");
    let data = JSON.parse(fileData);

    // If no filters are provided, return all data
    if (!filters.query && !filters.location && !filters.category) {
      const paginatedJobs = data.slice(
        (filters.page - 1) * filters.limit,
        filters.page * filters.limit
      );

      const responses = ApiResponse.success({
        message: "All jobs retrieved successfully",
        results: {
          jobList: paginatedJobs,
          pagination: {
            page: filters.page,
            limit: filters.limit,
            totalResults: data.length,
            totalPages: Math.ceil(data?.length / filters.limit),
          },
        },
      });

      return NextResponse.json(responses);
    }

    const filteredJobs = data.filter((job: any) => {
      // Check if the query matches any relevant job fields
      const queryMatch =
        !filters.query || // If query is not provided, match all
        (() => {
          const regex = new RegExp(filters.query.trim(), "i");
          return (
            regex.test(job.title) ||
            regex.test(job.description) ||
            regex.test(job.company?.name || "") ||
            regex.test(job.salary || "") ||
            regex.test(job.preferred_type || "") ||
            regex.test(job.details?.location || "") ||
            regex.test(job.details?.jobDescription || "")
          );
        })();

      // Check if the location matches
      const locationMatch =
        !filters.location || // If location is not provided, match all
        (job.details?.location || "")
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      // Check if the category matches
      const categoryMatch =
        !filters.category ||
        (job.preferred_type || "")
          ?.toLowerCase()
          .includes(filters.category.toLowerCase());

      // Return true if all active filters match
      return queryMatch && locationMatch && categoryMatch;
    });

    // Implement Pagination
    const paginatedJobs = filteredJobs.slice(
      (filters.page - 1) * filters.limit,
      filters.page * filters.limit
    );

    const responses = ApiResponse.success({
      message: "All jobs retrieved successfully",
      results: {
        jobList: paginatedJobs,
        pagination: {
          page: filters.page,
          limit: filters.limit,
          totalResults: data?.length,
          totalPages: Math.ceil(data?.length / filters.limit),
        },
      },
    });

    return NextResponse.json(responses);
  } catch (error) {
    const response = ApiResponse.error(error);
    return NextResponse.json(response);
  }
}

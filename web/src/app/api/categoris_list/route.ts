import { getJobList } from "@/actions/action";
import { ApiResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const jobListResponse = await getJobList();

    if (!jobListResponse.success) {
      throw new Error(jobListResponse.message);
    }

    const job = jobListResponse.results as [];

    const categories = new Set((job as any).map((i: any) => i.preferred_type));
    const categoriesList = Array.from(categories);

    const categoriesListOption = [] as any;
    categoriesList.forEach((loc: any) => {
      categoriesListOption.push({
        label: loc,
        value: loc.toLowerCase(),
      });
    });

    return NextResponse.json({
      success: true,
      message: "Categories fetched successfully",
      results: {
        categories: Array.from(new Set(categoriesList)),
        categoriesListOption: categoriesListOption,
      },
      statusCode: 200,
    });
  } catch (error) {
    console.error("Error fetching Categories:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch Categories",
        success: false,
        statusCode: 500,
      },
      {
        status: 400,
      }
    );
  }
}

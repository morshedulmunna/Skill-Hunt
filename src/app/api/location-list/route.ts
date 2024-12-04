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

    // console.log(job);

    const location = new Set((job as any).map((i: any) => i.details.location));
    const locations = Array.from(location);

    const locationOption = [] as any;
    locations.forEach((loc: any) => {
      locationOption.push({
        label: loc.toUpperCase(),
        value: loc.toLowerCase(),
      });
    });

    return NextResponse.json({
      success: true,
      message: "location fetched successfully",
      results: {
        locations: Array.from(new Set(locations)),
        locationOption: locationOption,
      },
      statusCode: 200,
    });
  } catch (error) {
    console.error("Error fetching locations:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch locations",
        success: false,
        statusCode: 500,
      },
      {
        status: 400,
      }
    );
  }
}

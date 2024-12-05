import { getJobDetails } from "@/actions/action";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const queryParams = new URLSearchParams(url.search);
  const id = queryParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "Job ID is required", success: false, statusCode: 400 },
      { status: 400 }
    );
  }

  const jobDetails = await getJobDetails(id);

  if (!jobDetails.success) {
    return NextResponse.json(jobDetails, { status: jobDetails.statusCode });
  }

  return NextResponse.json(jobDetails, { status: 200 });
}

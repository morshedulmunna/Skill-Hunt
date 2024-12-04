import { ApiResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const response = ApiResponse.success({
    message: "Successfully run server... 100%",
  });

  return NextResponse.json(response);
}

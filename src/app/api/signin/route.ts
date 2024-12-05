import { ApiResponse } from "@/utils/apiResponse";
import { NextResponse } from "next/server";

interface bodySchema {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const data = (await request.json()) as bodySchema;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      data.password
    );

  if (!isEmailValid || !isPasswordValid) {
    return ApiResponse.error({
      message: "Invalid email or password",
      statusCode: 400,
    });
  }

  const response = {
    success: true,
    statusCode: 200,
    message: "User signed in successfully",
    results: null,
  };

  return NextResponse.json(response);
}

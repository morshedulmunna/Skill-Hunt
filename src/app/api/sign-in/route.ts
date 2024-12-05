import { ApiResponse } from "@/utils/apiResponse";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import jwt from "jsonwebtoken";

interface FormDataSchema {
  email: string;
  password: string;
  name: string;
  accountType: string;
}

interface UserSchema extends FormDataSchema {
  id: string;
}

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function POST(request: Request) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "auth.data.json"
    );

    // Parse incoming data
    const data = (await request.json()) as Pick<
      FormDataSchema,
      "email" | "password"
    >;

    // Read the JSON file
    let fileData: UserSchema[] = [];

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      fileData = JSON.parse(fileContent);
    } catch (err) {
      const response = ApiResponse.error({
        message: "Failed to read user data.",
        error: err,
      });
      return NextResponse.json(response, { status: 500 });
    }

    // Check if the user exists
    const user = fileData.find((user) => user.email === data.email);

    if (!user || user.password !== data.password) {
      const response = ApiResponse.error({
        message: "Invalid email or password.",
      });
      return NextResponse.json(response, { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        accountType: user.accountType,
      },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    // Prepare a success response
    const res = ApiResponse.success({
      message: "Login successful.",
      results: {
        id: user.id,
        accountType: user.accountType,
        token,
      },
      statusCode: 200,
    });

    return NextResponse.json(res);
  } catch (error) {
    const response = ApiResponse.error({
      message: "An error occurred during login.",
      error: error instanceof Error ? error.message : error,
    });
    return NextResponse.json(response, {
      status: 400,
    });
  }
}

import { ApiResponse } from "@/utils/apiResponse";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import { v4 as uuidv4 } from "uuid";

interface FormDataSchema {
  email: string;
  password: string;
  name: string;
  accountType: string;
}

interface UserSchema extends FormDataSchema {
  id: string;
}

export async function POST(request: Request) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "assets",
      "auth.data.json"
    );
    // Parse incoming data
    const data = (await request.json()) as FormDataSchema;

    // Read the JSON file
    let fileData: UserSchema[] = [];

    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      fileData = JSON.parse(fileContent);
    } catch (err) {
      const response = ApiResponse.error(err);
      return NextResponse.json(response);
    }

    // Check if the user is already registered
    const userExists = fileData.some((user) => user.email === data.email);

    if (userExists) {
      throw new Error(`Already registered`);
    }

    // Add an ID to the user data
    const newUser: UserSchema = {
      ...data,
      id: uuidv4(),
    };

    fileData.push(newUser);
    await fs.writeFile(filePath, JSON.stringify(fileData, null, 2), "utf-8");

    const res = ApiResponse.success({
      message: "User registered successfully.",
      results: newUser,
      statusCode: 201,
    });
    return NextResponse.json(res);
  } catch (error) {
    const response = ApiResponse.error(error);
    return NextResponse.json(response, {
      status: 400,
    });
  }
}

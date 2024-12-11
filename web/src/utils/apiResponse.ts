type SuccessResponse = {
  message?: string | any;
  statusCode?: number;
  results?: Record<string, any> | null;
  requestDetails?: Record<string, any>;
};

class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name; // Optional: Gives the error a custom name
  }
}

export class ApiResponse {
  static createResponse(
    success: boolean,
    statusCode: number,
    message: string,
    results: Record<string, any> | null = null,
    requestDetails: Record<string, any> = {}
  ) {
    return {
      success,
      statusCode,
      message,
      results,
      requestDetails,
    };
  }

  static success({
    message,
    statusCode = 200,
    results = null,
    requestDetails = {},
  }: SuccessResponse) {
    return this.createResponse(
      true,
      statusCode,
      message,
      results,
      requestDetails
    );
  }

  static error(error: any) {
    let message = "An unexpected error occurred";
    let statusCode = 400;

    // Check if the error is an instance of CustomError and extract details
    if (error instanceof CustomError) {
      message = error.message;
      statusCode = error.statusCode;
    } else if (error instanceof Error) {
      message = error.message;
    }

    // Return structured error response
    return this.createResponse(false, statusCode, message, {});
  }
}

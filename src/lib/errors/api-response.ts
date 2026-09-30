import { NextResponse } from "next/server";
import { ApiResponse } from "@/types/api";
import { parseError } from "./error-handler";

export function successResponse<T>(
  data: T,
  message: string = "Operation successful",
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
}

export function errorResponse(
  error: unknown,
  fallbackMessage: string = "Request failed",
  path?: string
): NextResponse<ApiResponse<null>> {
  const parsed = parseError(error);

  return NextResponse.json(
    {
      success: false,
      message: parsed.message || fallbackMessage,
      error: {
        code: parsed.code,
        message: parsed.message,
        details: parsed.details,
        timestamp: new Date().toISOString(),
        path,
      },
    },
    { status: parsed.statusCode }
  );
}

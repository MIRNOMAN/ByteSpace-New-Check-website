import { AppError } from "./app-error";

export interface NormalizedError {
  message: string;
  code: string;
  statusCode: number;
  details?: unknown;
}

export function parseError(error: unknown): NormalizedError {
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      details: error.details,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      code: "UNKNOWN_ERROR",
      statusCode: 500,
    };
  }

  if (typeof error === "string") {
    return {
      message: error,
      code: "STRING_ERROR",
      statusCode: 500,
    };
  }

  if (error && typeof error === "object" && "data" in error) {
    const errorData = (error as { data: { message?: string; code?: string } }).data;
    return {
      message: errorData?.message || "An unexpected error occurred from server",
      code: errorData?.code || "API_ERROR",
      statusCode: (error as { status?: number }).status || 500,
    };
  }

  return {
    message: "An unexpected error occurred. Please try again later.",
    code: "UNHANDLED_EXCEPTION",
    statusCode: 500,
  };
}

export function logError(error: unknown, context?: string): void {
  const normalized = parseError(error);
  if (process.env.NODE_ENV !== "production") {
    console.error(`[Error][${context || "App"}]:`, {
      ...normalized,
      raw: error,
    });
  }
}

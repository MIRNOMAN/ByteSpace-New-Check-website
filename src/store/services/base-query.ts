import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers) => {
    // In production, token can be extracted from Redux state or cookie
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    // Handle global API errors, auth expiry (401), or logging
    console.warn("[RTKQuery:API_ERROR]", {
      status: result.error.status,
      data: result.error.data,
      endpoint: typeof args === "string" ? args : args.url,
    });
  }

  return result;
};

import axios, { AxiosResponse } from "axios";

interface CallOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: Record<string, unknown>;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  queryParams?: Record<string, any>;
  overrideBaseUrl?: string;
  headers?: Record<string, string>;
  options?: Record<string, any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export async function call({
  method,
  url,
  data = {},
  queryParams = {},
  overrideBaseUrl,
  headers,
  options,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: CallOptions): Promise<AxiosResponse<any>> {
  if (!url) {
    throw new Error("URL is required.");
  }

  const newUrl = overrideBaseUrl || "";
  const queryString = new URLSearchParams(
    Object.fromEntries(
      Object.entries(queryParams).filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, data]) => data !== undefined && data !== null && data !== ""
      )
    )
  ).toString();

  const fullUrl = `${url} ${queryString ? `?${queryString}` : ""}`;

  try {
    const response = await axios({
      method,
      url: fullUrl,
      baseURL: newUrl,
      data: method !== "GET" ? data : undefined, // Only send `data` for non-GET requests
      headers,
      ...options,
    });
    
    return response?.data;
  } catch (error) {
    console.error("Error making API call:", error);
    throw error;
  }
}

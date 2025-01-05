import axios, { AxiosResponse } from "axios";

interface CallOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  data?: Record<string, any>;
  queryParams?: Record<string, any>;
  overrideBaseUrl?: string;
  headers?: Record<string, string>;
  options?: Record<string, any>;
}

export async function call({
  method,
  url,
  data = {},
  queryParams = {},
  overrideBaseUrl,
  headers,
  options,
}: CallOptions): Promise<AxiosResponse<any>> {
  if (!url) {
    throw new Error("URL is required.");
  }

  let newUrl = overrideBaseUrl || "";
  const queryString = new URLSearchParams(
    Object.fromEntries(
      Object.entries(queryParams).filter(
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

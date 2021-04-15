import useSWR, { SWRResponse } from "swr";
import fetcher from "./fetcher";

export function useTest(): SWRResponse<string[], Error> {
  return useSWR<string[]>("/api/test", fetcher);
}

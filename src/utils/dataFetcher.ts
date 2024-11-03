const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/v1"
    : process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_API_URL;

type CacheType =
  | "force-cache"
  | "no-cache"
  | "no-store"
  | "only-if-cached"
  | "reload";
type RevalidateTime = number | false | undefined;
type Credentials = Partial<"include" | "omit" | "same-origin">;

const dataFetcher = async (
  url: string,
  credentials?: Credentials,
  Cache?: CacheType,
  revalidateTime?: RevalidateTime
) => {
  const req = await fetch(`${BASE_URL}/${url}`, {
    method: "GET",
    credentials: credentials,
    cache: Cache ? Cache : undefined,
    next: { revalidate: revalidateTime },
  });
  const response = await req.json();
  return response;
};

export default dataFetcher;

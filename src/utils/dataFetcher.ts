let BaseUrl = "http://localhost:4000/v1";

type CacheType = "force-cache"|"no-cache" | "no-store" | "only-if-cached" | "reload"
type RevalidateTime = number | false | undefined;
type Credentials = Partial<"include" | "omit" | "same-origin">


const dataFetcher = async (url:string,credentials?:Credentials,
    Cache?:CacheType,revalidateTime?:RevalidateTime) => {
  const req = await fetch(`${BaseUrl}/${url}`,{
    method:"GET",
    credentials:credentials,
    cache:Cache ? Cache : undefined ,
    next:{revalidate:revalidateTime}
  });
  const response = await req.json();
  return response
};

export default dataFetcher
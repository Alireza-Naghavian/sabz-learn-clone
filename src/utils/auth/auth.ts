import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/v1"
    : process.env.NODE_ENV === "production" && 
    process.env.NEXT_PUBLIC_API_URL;
interface JWTType extends JwtPayload {
  id: string;
}
const verifyAccessToken = (token: string | undefined) => {
  try {
    if (!process.env.JWT_SECRET) return null;
    if (!token) return null;
    const tokenPayLoad = verify(token, process.env.JWT_SECRET) as JWTType;
    return tokenPayLoad.id;
  } catch (error) {
    console.log("Verify Access Token Error ->", error);
    return null;
  }
};
export const getUser = async (userId:string) => {
  try {

    const response = await fetch(`${BASE_URL}/auth/${userId}`, {
        method: "GET",
        credentials:"include"
      });
      const data = await response.json();
    return data ;
  } catch (error) {
    console.log("something went wrong =>", error);
  }
};

export const authUser = async()=>{
  try {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("accessToken");

    if (!tokenCookie || !tokenCookie.value) {
     return null
    }

    const userId  = verifyAccessToken(tokenCookie.value);
    const user = await getUser(userId as string)
    return user
  } catch (error) {
    console.log("something went wrong =>", error);
  }
}



import { CourseBodyType, QueryStrings } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const CoursesListApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        filterCourses:builder.query<CourseBodyType[],QueryStrings>({
            query:({sort,cat,isFree,preOrder})=>{
                const params = new URLSearchParams();
                if (sort) params.append('sort', sort);
                if (isFree) params.append('isFree', isFree);
                if (preOrder) params.append('preOrder', preOrder);
                if (cat) {
                    if (Array.isArray(cat)) {
                        cat.forEach(c => params.append('cat', c));
                    } else {
                        params.append('cat', cat);
                    }
                }
                return{
                    url:`/courses`,
                    params,
                    method:"GET",
                cache:"no-store"
                }
            }
            ,
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        })
    })
})

export const {useFilterCoursesQuery} = CoursesListApiSlice 
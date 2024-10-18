import { FilterReqType, QueryStrings } from "@/types/services/course&category.t";
import apiSlice from "../baseApi";

export const CoursesListApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        filterCourses:builder.query<FilterReqType,QueryStrings>({
            query:({sort,cat,isFree,preOrder,limit,page,directPath,categoryName,search})=>{
           
                const params = new URLSearchParams();
                if (sort) params.append('sort', sort);
                if (isFree) params.append('isFree', isFree);
                if (preOrder) params.append('preOrder', preOrder);
                if (search) params.append('search', search);

                if (cat && directPath !=="category") {
                    if (Array.isArray(cat)) {
                        cat.forEach(c => params.append('cat', c));
                    } else {
                        params.append('cat', cat);
                    }
                }
                return{
                    url:directPath  === "category" ? `/courses/category/${categoryName}`:"/courses",
                    headers:{
                      'X-Page': page.toString(),  
                      'X-Limit': limit.toString()  
                    },
                    params,
                    method:"GET",
                cache:"no-store"
                }
            }, 
            transformErrorResponse(baseQueryReturnValue) {
                return baseQueryReturnValue.data
            },
        })
    })
})

export const {useFilterCoursesQuery} = CoursesListApiSlice 
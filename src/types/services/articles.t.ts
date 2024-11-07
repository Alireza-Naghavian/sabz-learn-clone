import { UserType } from "./authapi.t";

export type ArticlesBodyType = {
    _id?:string,
    title:string,
    body:string,
    description:string,
    categoryID:string,
    cover:string,
    creator:string
    shortName:string
    isActiveNotif:boolean
}
export type ArticleTableData=Omit<ArticlesBodyType,"categoryID"|"creator">&{
    categoryID:{title:string,_id:string};
    createdAt:Date
    creator:UserType
}
export type FilterBlogReqType ={
    totalPages:number,
    currentPage:number,
    totalBlogs:number,
    blogs:ArticleTableData[] 
  }

  export type RelatedBlogType =Pick<ArticleTableData,"title"|"_id"|"cover"|"createdAt">
import { SessionBodyType } from "./sessions&Topics.t";

export type CatBodytype = {
  _id?: string;
  title: string;
  link: string;
  Courses?:CourseBodyType[];
};
export type CreateCatMgs = {
  message: string;
  data: CatBodytype;
};
export type RemoveQuery = { _id: string };
export type CourseQuery = { shortName: string };
export type ResultMsg = Pick<CreateCatMgs, "message">;
export type CreateCorseType =Omit<CourseBodyType,"creator">&{creator:string}
export type CourseBodyType = {
  name: string;
  _id?: string;
  categoryID: string;
  cover: string;
  status: string;
  shortName: string;
  duration: string;
  courseAverageScore:number
  price: number;
  support: string;
  description: string;
  longDesc: string;
  isFree: boolean;
  creator: {username:string,_id:string};
  preReq: string;
  inProgress?: string;
  preOrder?: string;
  discount?:number,
  topics?: {
    _id?: string;
    title: string;
    course: string;
    sessions: SessionBodyType[];
  }[];
  registers?: number;
};

export type CourseDataTable = Omit<CourseBodyType, "categoryID"> & {
  categoryID: { title: string; _id?: string,link?:string };
  createdAt?:Date,
  updatedAt?:Date
  sessions:SessionBodyType[]
  isUserRegisteredToThisCourse?:boolean
};
export interface SingleCourseData extends CourseDataTable {
  comments: [];
  sessions: [];
  courseStudentsCount: number;
  discount: number;
  isComplete: boolean;
}

export type FilterReqType ={
  totalPages:number,
  currentPage:number,
  totalCourses:number,
  allCourses:CourseBodyType[] 
}
export type TableCourseData=Omit<FilterReqType,"allCourses">&{allCourses:CourseDataTable[]}

export type CourseCatType = FilterReqType&{
  category:CatBodytype[]
}
export type QueryStrings ={
cat: string[],
sort:string,
isFree:string,
preOrder:string
page:number
search:string,
limit:number
directPath?:string
categoryName?:string
}

export type FilterCourseType ={
  isFree:string,
  preOrder:string,
  // usreCourse:?
}
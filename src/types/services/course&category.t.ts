
export type CatBodytype = {
  _id?: string;
  title: string;
  link: string;
};
export type CreateCatMgs = {
  message: string;
  data: CatBodytype;
};
export type RemoveQuery = { _id: string };
export type CourseQuery = {shortName:string}
export type ResultMsg = Pick<CreateCatMgs, "message">;

export type CourseBodyType = {
  name: string;
  _id?: string;
  categoryID: string;
  cover: string;
  status: string; 
  shortName: string;
  duration: string;
  price: number;
  support: string;
  description: string;
  longDesc: string;
  isFree: boolean;
  creator: string;
  preReq: string;
  inProgress?: string;
  preOrder?: string;
  registers?: number;
};

export type CourseDataTable = Omit<CourseBodyType, "categoryID"> & {
  categoryID: { title: string; _id?: string };
};
export interface SingleCourseData extends CourseDataTable{
  comments:[],
  sessions:[],
  courseStudentsCount:number,
  discount:number,
  isComplete:boolean,
}
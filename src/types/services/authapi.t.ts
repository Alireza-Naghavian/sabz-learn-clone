import { CourseBodyType } from "./course&category.t";

export type UserType = {
  totalUserPaid?:number
  _id?: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  password:string
  updatedAt: Date;
  userCourse:[{course:CourseBodyType[]}]
  userQuestions:{body:string,course:CourseBodyType,isAnswer:boolean,date:Date,session:string,creator:string,_id:string}[]
};
export type GetmeType = {
  user: UserType;
  courses: [];
  notfications: [];
};
export type CreateUserType = {
  email: string;
  username: string;
  password: string;
};
export type loginType = Pick<CreateUserType, "password"> & {
  identifier: string;
};
export type SignUpResultMsg = {
  user: CreateUserType;
  message: string;
};
export type LogoutMsg = Pick<SignUpResultMsg, "message">;

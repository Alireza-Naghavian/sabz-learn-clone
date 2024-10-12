import { UserType } from "./authapi.t";
import { CourseBodyType } from "./course&category.t";

export type CommentBodyType = {
  body: string;
  courseShortName: string;
};
type RepliesType = CommentData[];

export type CommentData = {
  body: string;
  course: string;
  creator: UserType;
  answer: number;
  score: number;
  isAnswer: number;
  mainCommendID: string;
  adminReplies: RepliesType;
  userReplies: RepliesType;
  _id:string,
  createdAt?:Date
};
export type CommentStatusType ={
    status:boolean | string
    _id:string
}
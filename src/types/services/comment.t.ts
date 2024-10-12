import { GetmeType } from "./authapi.t";
import { CourseBodyType } from "./course&category.t";

export type CommentBodyType = {
  body: string;
  courseShortName: string;
};
type RepliesType = CommentData[];

export type CommentData = {
  body: string;
  course: CourseBodyType;
  creator: GetmeType;
  answer: number;
  score: number;
  isAnswer: number;
  mainCommendID: string;
  adminReplies: RepliesType;
  userReplies: RepliesType;
};

import { SetState } from "../global.t";
import { UserType } from "./authapi.t";

export type CommentBodyType = {
  body: string;
  courseShortName: string;
};
type RepliesType = CommentData[];

export type CommentData = {
  body: string;
  course: {name:string,_id:string};
  creator: UserType;
  answer: number;
  score: number;
  isAnswer: number;
  mainCommendID: string;
  adminReplies: RepliesType;
  userReplies: RepliesType;
  _id:string,
  createdAt:Date
};
export type CourseCommentType ={
  courseComments:CommentData[]
  totalPages:number
currentPage:number
}
export type CommentStatusType ={
    status:boolean | string
    _id:string
}
export type AnswerCommentBodyType=Pick<CommentData,"_id"|"body">&{
creator:string
}
export type CommentListType = {
  setReply: SetState<boolean>;
  open?: () => void;
  data: CommentData[];
  isLoading: boolean;
  setcommentId: SetState<string>;
  addReply: boolean;
  setPage:SetState<number>;
  page:number
  totalPages:number
  currentPage:number  
};

export type CommentType = {
  open?: () => void;
  addReply: boolean;
  children?: React.ReactNode;
  className: string;
  isReply: boolean;
  commentData: CommentData;
  setReply: SetState<boolean>;
  setcommentId: SetState<string>;
  commentId: string;
}
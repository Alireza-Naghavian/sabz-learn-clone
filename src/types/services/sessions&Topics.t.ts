import { CatBodytype, CourseDataTable } from "./course&category.t";

export type TopicBody = {
  title: string;
  course: string;
};
export type SessionBodyType = TopicBody & {
  topic: string;
  isFree: boolean | number;
  video: File[];
  time: string;
  _id?: string;
};
export type TopicDataType = TopicBody & {
  sessions: SessionBodyType[];
};
export type SessionTableData = Omit<SessionBodyType, "course"> & {
  course: { name: string; _id?: string; categoryID?: CatBodytype,shortName?:string };
};
export type CourseSessionData = Omit<SessionTableData,"video">&{
  video:string
}
export type SessionInfoType = {
  sessions: SessionBodyType[];
  session: CourseSessionData;
  course: CourseDataTable;
};


export type UserQBodyType = {
  creator:string,
  shortName:string,
  sessionId:string,
  body:string
}
export type UserQDataType=Pick<UserQBodyType,"body"|"creator"> &{
  course:string
  _id?:string
  adminAnswers:[]
}
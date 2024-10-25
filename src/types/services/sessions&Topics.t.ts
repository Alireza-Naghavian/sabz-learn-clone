import { UserType } from "./authapi.t";
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
  _id: string;
};
export type TopicDataType = TopicBody & {
  sessions: SessionBodyType[];
};
export type SessionTableData = Omit<SessionBodyType, "course"> & {
  course: {
    name: string;
    _id?: string;
    categoryID?: CatBodytype;
    shortName?: string;
  };
};
export type CourseSessionData = Omit<SessionTableData, "video"> & {
  video: string;
};
export type SessionInfoType = {
  sessions: SessionBodyType[];
  session: CourseSessionData;
  course: CourseDataTable;
};

export type UserQBodyType = {
  creator: string;
  shortName: string;
  sessionId: string;
  body: string;
};
export type AnswerQBodyType = Omit<UserQBodyType, "shortName" | "creator"> & {
  questionId: string;
};

export type QuestionSampleType = {
  creator: UserType;
  course: { name: string; _id: string };
  body: string;
  date: Date;
  isAnswer: boolean;
  session: SessionBodyType;
  adminAnswers: [];
  _id: string;
};
export type MergeQBody = {
  session: SessionBodyType;
  course: { name: string; _id: string };
  questions: QuestionSampleType[];
  creator: UserType;
};

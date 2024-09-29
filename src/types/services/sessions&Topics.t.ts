export type TopicBody = {
  title: string;
  course: string;
};
export type SessionBodyType = TopicBody & {
  topic: string;
  isFree: boolean;
  video: File[];
  time: string;
  _id?:string
};

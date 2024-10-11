export type TopicBody = {
  title: string;
  course: string;
};
export type SessionBodyType = TopicBody & {
  topic: string;
  isFree: boolean|number;
  video: File[];
  time: string;
  _id?:string;

};
export type TopicDataType = TopicBody&{
  sessions:SessionBodyType[]
}
export type SessionTableData =Omit<SessionBodyType,"course">&{course:{name:string,_id?:string}}

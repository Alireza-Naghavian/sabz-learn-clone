import { UserType } from "./authapi.t";

export type DeptBodyType = {
  title: string;
  _id: string;
};
export type TicketBodyType = {
  title: string;
  body: string;
  departmentID: string;
  _id?: string;
};

export type MessagesType = {
  body: string;
  sendAt: Date;
  sender: UserType;
  _id: string;
};
export type AnswerBodyType = {
  body: string;
  sender: string;
  ticketID: string;
};
export type MessageDataType = Omit<MessagesType, "sender"> & {
  sender: UserType;
};
export type TicketTableData = Omit<TicketBodyType, "departmentID"> & {
  user: UserType;
  departmentID: DeptBodyType;
  isPending: boolean;
  isOpen: boolean;
  isAnswer: boolean;
  answer: boolean;
  messages: MessagesType[];
  adminMessages: MessagesType[];
  createdAt: Date;
};

export type ContentType = {
  target: string;
  title: string;
  status?: string;
  date?: Date;
  isOpen?: boolean;
  isPending?: boolean;
  isAnswer?: boolean;
  departmentID?: DeptBodyType;
  dept?: string;
};

export type TicketStType = {
  isOpen?: boolean;
  isPending?: boolean;
  isAnswer?: boolean;
  className?: string;
  title?: string;
};

export type TicketStatusType = {
  isPending: boolean;
  isAnswer: boolean;
  isOpen: boolean;
  ticketID:string
};

export type UserType ={
  _id?:string,
  username:string,
  email:string,
  role:"ADMIN"|"USER",
  createdAt:Date,
  updatedAt:Date
}
export type CreateUserType = {
  email: string;
  username: string;
  password: string;
};
export type SignUpResultMsg = {
  user: CreateUserType;
  message:string
};

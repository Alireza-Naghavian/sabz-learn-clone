export type UserType = {
  _id?: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: Date;
  updatedAt: Date;
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

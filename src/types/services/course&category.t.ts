export type CatBodytype = {
  _id?:string
  title: string;
  link: string;
};
export type CreateCatMgs = {
  message: string;
  data: CatBodytype;
};
export type RemoveCatBody = {_id:string}
export type RemoveCatMgs = Pick<CreateCatMgs,"message">

export type CatBodytype = {
  _id?:string
  title: string;
  link: string;
};
export type CreateCatMgs = {
  message: string;
  data: CatBodytype;
};

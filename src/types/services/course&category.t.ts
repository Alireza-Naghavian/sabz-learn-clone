export type CatBodytype = {
  _id?: string;
  title: string;
  link: string;
};
export type CreateCatMgs = {
  message: string;
  data: CatBodytype;
};
export type RemoveCatBody = { _id: string };
export type ResultMsg = Pick<CreateCatMgs, "message">;

export type CourseBodyType = {
  name: string;
  categoryID: string;
  cover: string;
  status: string;
  shortName: string;
  duration: string;
  price: number;
  support: string;
  description: string;
  longDesc: string;
  isFree: boolean;
  creator: string;
  preReq: string;
  inProgress?: string;
  preOrder?: string;
};

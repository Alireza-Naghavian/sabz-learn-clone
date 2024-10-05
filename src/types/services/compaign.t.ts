export type CompaignBodyType = {
  title: string;
  fixCover: string;
  mainCover: string;
  endDate: Date;
  percent: number;
};
export type CompaignTableData = CompaignBodyType&{_id?:string,active:boolean,discount:number}


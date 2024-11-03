export type CompaignCoverType = {
  url: string;
  public_id: string;
};
export type CompaignBodyType = {
  title: string;
  fixCover: File[];
  mainCover: File[];
  endDate: Date;
  percent: number;
};
export type CompaignTableData = Omit<
  CompaignBodyType,
  "fixCover" | "mainCover"
> & { _id?: string; active: boolean; discount: number
  fixCover:CompaignCoverType
mainCover:CompaignCoverType
 };

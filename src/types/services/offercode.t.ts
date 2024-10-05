export type OfferCodeBody = {
    code:string,
    percent:number,
    course:string;
    max:number,
}
export type OfferTableData =Omit<OfferCodeBody,"course">&{
    course:{name:string,_id:string}
    _id?:string
    uses:number
    createdAt:Date
}
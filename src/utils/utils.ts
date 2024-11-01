export const saveToStorage = (key:string, value:any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key:string) => {
  const data = JSON.parse(localStorage.getItem(key) as string);
  return data;
};

export const  formatPriceNumber = (input:string)=>{
let value = String(input?.replace(/\D/g,""))
if(value){
  value = String(value.replace(/\B(?=(\d{3})+(?!\d))/g, ","))

}
return value
}

export const formatNumber = (number: number | string) =>
  number.toLocaleString("fa-IR");
export default formatNumber
export const saveToStorage = (key:string, value:string) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key:string) => {
  const data = JSON.parse(localStorage.getItem(key) as string);
  return data;
};

export const  formatPriceNumber = (input:any)=>{
let value = input.replace(/\D/g,"")
if(value){
  value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}
return value
}

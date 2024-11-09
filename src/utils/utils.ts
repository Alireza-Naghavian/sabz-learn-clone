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

export const uploadToCloudinary =  async (file:File[])=>{
  const formData = new FormData();
  formData.append("file",file[0])
  formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET as string)
  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,{
      method:"POST",
      body:formData
    })
    const data = await response.json();
    return data
  } catch (error) {
    console.log(error);
  }
}
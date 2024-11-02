
export const handleVideoUpload = (fileData: any) => {
    const file =fileData[0];
    return new Promise<number>((resolve, reject) => {
        const videoElement = document.createElement("video");
        const fileURL = URL.createObjectURL(file);
        videoElement.src = fileURL;
        videoElement.onloadedmetadata = () => {
            const duration = videoElement.duration; 
            resolve(duration); 
          };
          videoElement.onerror = () => {
            reject("خطا در بارگذاری ویدئو");
          };
    });
 
};
export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  export const timeReducer = (times:{time:string}[])=>{
    const allTimeAmount = times.reduce((acc:any,curr)=>{
      const arrayNumb =curr.time.split(":");
      const minToSec = Number(arrayNumb[0])*60
      const secNumb  = Number(arrayNumb[1])
      if(!acc[curr.time]){
        acc[curr.time] = {minTime:0,secTime:0}
      }
      acc[curr.time].minTime +=minToSec
      acc[curr.time].secTime +=secNumb
      return acc
 
    },{})
    const formatTimeValues = Object.values(allTimeAmount)
    const valueReducer = formatTimeValues.reduce((acc:any,curr:any)=>{
      return acc + curr.minTime + curr.secTime
    },0)
    const convertToStringTime = formatTime(valueReducer as number)
    return convertToStringTime
    
  }
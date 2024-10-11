
export const handleVideoUpload = (fileData: any) => {
    const file =fileData[0]; // ویدئو انتخاب شده

    return new Promise<number>((resolve, reject) => {
        const videoElement = document.createElement("video");
        const fileURL = URL.createObjectURL(file);
        videoElement.src = fileURL;
        videoElement.onloadedmetadata = () => {
            const duration = videoElement.duration; 
            resolve(duration); 
          };
          videoElement.onerror = (error) => {
            reject("خطا در بارگذاری ویدئو");
          };
    });
 
};
export const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
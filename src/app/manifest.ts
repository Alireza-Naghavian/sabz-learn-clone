import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "سبز لرن",
    short_name: "sabz-learn",
    description:
      "آکادمی آموزش برنامه نویسی سبزلرن درکنار شماست تا بهترین و با کیفیت ترین دوره های فرانت‌اند و بک‌اند را در اختیار شما قرار دهد، همچنین Sabzlearn به شما کمک خواهد کرد که با برنامه نویسی بتوانید درآمد کسب کنید و در حوزه های مختلف فعال باشید.",
    display:"standalone",
    background_color:"#22c55e",
    theme_color:"#22c55e",
    start_url:"/",
    id:"/",
    icons:[
        {
            src: '/icons/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',  
        },
        {
            src: '/icons/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',  
        },
    ],
    screenshots:[
  
        {
          src: "/icons/sc-1.png",
          sizes: "1916x922",
          type: "image/png",
          
        },
        
        {
          src: "/icons/sc-2.png",
          sizes: "552x707",
          type: "image/png",
        
        }
    ]
    };
}

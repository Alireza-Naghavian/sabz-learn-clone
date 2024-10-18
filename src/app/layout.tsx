import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  applicationName: "سبز لرن",
  icons:{
    icon: [
      { url: "/images/favicon.png",  sizes: " 32x32 ", type: "image/png" },
    ],
  },
  title: "سبز لرن | Sabzlearn",
  description:
    "آکادمی آموزش برنامه نویسی سبزلرن درکنار شماست تا بهترین و با کیفیت ترین دوره های فرانت‌اند و بک‌اند را در اختیار شما قرار دهد، همچنین Sabzlearn به شما کمک خواهد کرد که با برنامه نویسی بتوانید درآمد کسب کنید و در حوزه های مختلف فعال باشید.",
  openGraph: {
    type: "website",
    siteName: "سبز لرن | Sabzlearn",
    title: "سبز لرن | Sabzlearn",
    description:
      "آکادمی آموزش برنامه نویسی سبزلرن درکنار شماست تا بهترین و با کیفیت ترین دوره های فرانت‌اند و بک‌اند را در اختیار شما قرار دهد، همچنین Sabzlearn به شما کمک خواهد کرد که با برنامه نویسی بتوانید درآمد کسب کنید و در حوزه های مختلف فعال باشید.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth dark ">
      <body
        className="font-Dana text-gray-900 dark:text-white
       bg-gray-100 dark:bg-gray-900"
      >
        {children}
      </body>
    </html>
  );
}

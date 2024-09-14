import { InstaIcon, TelegramIcon } from "@/utils/Icons";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mt-25 sm:mt-40 bg-white dark:bg-darker py-8 md:pt-16 md:pb-2">
      <div className="container footer">
        <div className="flex justify-between flex-wrap  gap-y-5 gap-x-4 pb-5 border-b dark:border-b-gray-700">
          <div className="flex flex-col items-center sm:items-start gap-y-5 sm:flex-grow">
            <h4 className="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
              درباره ما
            </h4>
            <p className="sm:max-w-xs">
              سبزلرن یک اکادمی خصوصی آموزش برنامه نویسی هست که با هدف تحویل
              نیروی متخصص بر پایه تولید محتوای غیرسطحی فعالیت میکند
            </p>
          </div>
          <div className="flex flex-col gap-y-5  flex-grow">
            <h4 className="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
              دسترسی سریع
            </h4>
            <div className="flex-col flex items-start gap-y-3 ">
              <Link href="#" className="text-hover">
                قوانین و مقررات
              </Link>
              <Link href="#" className="text-hover">
                ارسال تیکت
              </Link>
              <Link href="#" className="text-hover">
                همه دوره ها
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 flex-grow">
            <h4 className="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
              لینک های مفید
            </h4>
            <div className="flex-col flex items-start gap-y-3 ">
              <Link href="#" className="text-hover">
                آموزش جاوااسکریپت
              </Link>
              <Link href="#" className="text-hover">
                آموزش HTML
              </Link>
              <Link href="#" className="text-hover">
                آموزش CSS
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 flex-grow">
            <h4 className="font-DanaMedium text-2xl text-zinc-700 dark:text-white">
              شبکه های اجتماعی
            </h4>
            <div className="flex-col flex items-start gap-y-3">
              <div className="flex items-center gap-x-4">
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-orange-600 text-white bg-gradient-to-tr from-[#FEDC15] via-[#F71F87] to-[#9000DC]">
                  <InstaIcon className="size-5" />
                </div>
                <a href="#" className="text-hover font-DanaMedium" dir="ltr">
                  @sabzlearn_
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <div className="flex items-center justify-center rounded-full w-8 h-8 bg-blue-500 text-white bg-gradient-to-b from-blue-400 to-blue-600">
                  <TelegramIcon className="size-5" />
                </div>
                <a href="#" className="text-hover font-DanaMedium" dir="ltr">
                  @sabzlearn_
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center xs:justify-between flex-wrap gap-x-3 gap-y-2 py-5 text-base">
          <span className="xs:mx-auto sm:mx-0">ساخته شده با ❤️ در سبزلرن</span>
          <p className="text-center xs:mx-auto sm:mx-0" dir="ltr">
            Copyright © 2019-2024 Sabzlearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

"use client";
import PrimaryBtn from "@/components/ui/button/PrimaryBtn";
import { BellIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import "./notification.css";
import UrlBaseArry from "@/utils/outputArray";
import { usePushSubscriptionMutation } from "@/services/notifications/notificationSlice";
import { useAlert } from "@/context/AlertProvider";

function Notification() {
  const [isSupport, setIsSupport] = useState(false);
  const [subscribe, setSubscribe] = useState<PushSubscription | null>(null);
  const [isShow,setIsShow] = useState(false)
  const [subscribeUser] = usePushSubscriptionMutation();
  const { showAlert } = useAlert();
  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupport(true);
      registerSw();

    }
  }, []);
  const registerSw = async () => {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscribe(sub);
    setIsShow(true)
  };
  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: UrlBaseArry(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY as string
      ),
    });
    setSubscribe(sub);
    await subscribeUser(sub)
      .unwrap()
      .then((res) => {
        showAlert("success", res.message);
      }).catch((err)=>{
        showAlert("error",err.message)
      })
  }

  return (
    <div className={` relative ${!isShow && "hidden"}`}>
      <PrimaryBtn
        variant="fill"
        onClick={() => {
          if (!isSupport) {
            return showAlert(
              "error",
              "مرورگر شما از این قابلیت پشتیبانی نمیکند"
            );
          }
          subscribeToPush();
        }}
        size="xl"
        type="button"
        className={`fixed ${
          subscribe && "hidden"
        }  bell_Btn bottom-10 left-10 !size-16 !rounded-full`}
      >
        <BellIcon />
        <span className="absolute tooltiptext text-nowrap dark:text-white text-darker right-0 !px-4 py-2  dark:bg-darker bg-gray-300 ">
          فعال سازی اعلان ها
        </span>
      </PrimaryBtn>
    </div>
  );
}

export default Notification;

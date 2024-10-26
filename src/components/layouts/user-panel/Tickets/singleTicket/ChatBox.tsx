"use client";
import TextLoader from "@/components/ui/loader/TextLoader";
import { useGetMeQuery } from "@/services/auth/authApiSlice";
import { useGetTicketQuery } from "@/services/tickets&depts/ticketApiSlice";
import { MessagesType } from "@/types/services/tickets.t";
import React from "react";
import ContentList from "../../ContentList";
type ChatBoxType = {
  ticketId: string;
  children: React.ReactNode;
};
function ChatBox({ ticketId, children }: ChatBoxType) {
  const { data: ticket, isLoading } = useGetTicketQuery({ _id: ticketId });
  const { data, isLoading: isUserLoading } = useGetMeQuery();
  if (isLoading ||isUserLoading) return <TextLoader loadingCondition={isLoading||isUserLoading} />;

  const adminMsgs = ticket?.adminMessages || [];
  const userMsgs = ticket?.messages || [];
  const concatMsgs = [...adminMsgs, ...userMsgs].sort(
    (a, b) => new Date(a.sendAt).getTime() - new Date(b.sendAt).getTime()
  );
  return (
    <ContentList title={ticket?.title as string}>
      <div className="space-y-4">
        <div
          className={` w-11/12 sm:w-2/3 dark:text-white p-4 rounded-2xl text-zinc-700
            ${
              String(ticket?.user?._id) === String(data?.user?._id)
                ? ` bg-gray-100 dark:bg-gray-700 rounded-tr-sm   `
                : `bg-sky-500/30 dark:bg-secondary/20 rounded-tl-sm mr-auto `
            }
          `}
        >
          <h4 className="font-DanaMedium  text-xl mb-1 text-right">
            {ticket?.user?.username}
          </h4>
          <span className="block text-xs font-Dana text-slate-500 dark:text-slate-400 text-right">
            {new Date(ticket?.createdAt as Date).toLocaleDateString("fa-IR", 
            {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <p className="font-DanaMedium mt-4.5">{ticket?.body}</p>
        </div>

        {concatMsgs.length > 0 &&
          concatMsgs.map((message: MessagesType, index: number) => {
            const isOwnMessage =
              String(message.sender._id) == String(data?.user?._id || "");
            return (
              <div
                key={index}
                className={`
        w-11/12 sm:w-2/3 dark:text-white p-4 rounded-2xl text-zinc-700
        ${
          isOwnMessage
            ? `
          bg-gray-100 dark:bg-gray-700
          rounded-tr-sm ml-auto 
          `
          : `bg-sky-500/30 dark:bg-secondary/20 rounded-tl-sm mr-auto`
        }`} >
                <h4 className="font-DanaMedium text-xl mb-1 text-left">
                  {message.sender.username}
                </h4>
                <span
                  className="block text-xs font-Dana text-slate-500 dark:text-slate-400 text-left"
                  dir="rtl"
                >
                  {new Date(message.sendAt as Date).toLocaleDateString(
                    "fa-IR",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </span>
                <p className="font-DanaMedium mt-4.5">{message.body}</p>
              </div>
            );
          })}
        {ticket?.isOpen ? (
          children
        ) : (
          <div className="w-full p-2 py-4 text-center dark:bg-dark bg-gray-300">
            <p className="dark:text-red-400 ">
              این تیکت به صورت خودکار بسته شد
            </p>
          </div>
        )}
      </div>
    </ContentList>
  );
}
export default ChatBox;

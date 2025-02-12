"use client";
import Button from "@/components/ui/button/Button";
import Overlay from "@/components/ui/Overlay/Overlay";
import SideBarItem from "@/components/ui/SideBarItem/SideBarItem";
import useDisclosure from "@/hooks/useDisclosure";
import useLocalBookmarks from "@/hooks/useLocalBookmark";
import { CourseSessionData } from "@/types/services/sessions&Topics.t";
import { BookmarkIcon } from "@heroicons/react/24/outline";

function Bookmark() {
  const [isMarkOpen, { close, toggle }] = useDisclosure();
  const bookmarks = useLocalBookmarks();

  return (
    <>
      <Overlay onClose={() => close()} openCondition={isMarkOpen} />
      <div className="relative group">
        {/* <!-- User Picture --> */}
        <Button
          size="xl"
          type="button"
          className={isMarkOpen ? "!relative !z-50" : ""}
          onClick={() => toggle()}
        >
          <BookmarkIcon className={` w-6 h-6`} />
        </Button>

        {/* <!-- When Click Box Showing --> */}
        <div className="absolute sm:left-0 -left-4  top-full pt-4 transition-all duration-300 z-50 ">
          <div
            className={
              isMarkOpen
                ? ` w-[278px] bg-white dark:bg-darker flex flex-col gap-y-2 border
            border-neutral-100 dark:border-0  py-1 px-2 rounded-xl`
                : "hidden"
            }
          >
            {bookmarks.length === 0 ? (
              <SideBarItem
                variant={"hoverMode"}
                className="text-sm"
                Icon={() => <BookmarkIcon className={` w-5 h-5`} />}
                title={"لیست بوک مارک خالی است"}
                target={``}
              />
            ) : (
              bookmarks.map((session:CourseSessionData) => {
                return (
                  <SideBarItem
                    key={session._id}
                    variant={"hoverMode"}
                    className="text-sm"
                    Icon={() => <BookmarkIcon className={` w-5 h-5`} />}
                    title={session.title}
                    target={`/courses/course/sessions/${session._id}`}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bookmark;

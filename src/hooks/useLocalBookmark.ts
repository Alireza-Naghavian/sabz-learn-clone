import { useEffect, useState } from "react";

const useLocalBookmarks = () => {
  const [bookmarks, setBookmarks] = useState(() => {
if(typeof window !=="undefined"){
  const stored = localStorage.getItem("bookmarks");
  return stored ? JSON.parse(stored) : [];
}
  });

  useEffect(() => {
    const handleBookmarksChange = () => {
  if(typeof window !== "undefined"){
    const stored = localStorage.getItem("bookmarks");
    setBookmarks(stored ? JSON.parse(stored) : []);
  }
    };

    window.addEventListener("bookmarksChanged", handleBookmarksChange);
    window.addEventListener("storage", handleBookmarksChange);

    return () => {
      window.removeEventListener("bookmarksChanged", handleBookmarksChange);
      window.removeEventListener("storage", handleBookmarksChange);
    };
  }, []);
  return bookmarks;
};

export default useLocalBookmarks

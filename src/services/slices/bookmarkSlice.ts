import { CourseSessionData } from "@/types/services/sessions&Topics.t";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookmarkState = {
  bookmarks: CourseSessionData[];
};

const initialState: BookmarkState = {
  bookmarks: [],
};

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState,
  reducers: {
    addBookmark: (state, action: PayloadAction<CourseSessionData>) => {
        const storedBookmarks: CourseSessionData[] = JSON.parse(
          localStorage.getItem("bookmarks") || "[]"
        );
        const mergedBookmarks = [...storedBookmarks, ...state.bookmarks];
        const isExists = mergedBookmarks.some(
          (s) => s._id === action.payload._id
        );
        if (!isExists) {
          const newBookmarks = [...mergedBookmarks, action.payload].slice(-3);
          state.bookmarks = newBookmarks;
          localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      }
    },

    clearBookmarks: (state) => {
        localStorage.removeItem("bookmarks");
        state.bookmarks = [];
    },
  },
});

export const { addBookmark, clearBookmarks } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;

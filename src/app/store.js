import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import filterByAuthorSlice from "../features/filterByAuthor/filterByAuthorSlice";
import LikesUnlikesSlice from "../features/LikesUnlikes/LikesUnlikesSlice";
import paginationSlice from "../features/pagination/paginationSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
        filter: filterReducer,
        pagination: paginationSlice,
        author: filterByAuthorSlice,
        LikesUnlikes: LikesUnlikesSlice,
    },
});

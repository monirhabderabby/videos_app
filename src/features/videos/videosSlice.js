import { getVideos, UpdateLikeUnlikestoServer } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const UpdateLikeUnlikesAsync = createAsyncThunk(
    "videos/UpdateLikeUnlikes",
    async ({ status, id, data }, thunkApi) => {
        const { dispatch } = thunkApi;
        const result = UpdateLikeUnlikestoServer(status, id, data);
        if (status === "likes") {
            dispatch(updateLike({ id, data }));
        } else {
            dispatch(updateUnlike({ id, data }));
        }
        console.log(result);
    }
);
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({ tags, search, page, author }) => {
        const videos = await getVideos(tags, search, page, author);
        return videos;
    }
);

const videoSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        updateLike: (state, action) => {
            state.videos.map((video) => {
                if (video.id === action.payload.id) {
                    return (video.likes = action.payload.data);
                }
            });
        },
        updateUnlike: (state, action) => {
            state.videos.map((video) => {
                if (video.id === action.payload.id) {
                    return (video.unlikes = action.payload.data);
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export const { updateLike, updateUnlike } = videoSlice.actions;
export default videoSlice.reducer;

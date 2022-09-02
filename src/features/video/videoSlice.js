import { getVideo, updateLikeForAsync } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const updateLikeandUnlike = createAsyncThunk(
    "video/updateLikeandUnlike",
    async (id, updatedLikes) => {
        const result = await updateLikeForAsync(id, updatedLikes);
    }
);

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        updateLike: (state) => {
            state.video.likes += 1;
        },
        updateUnlike: (state) => {
            state.video.unlikes += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export const { updateLike, updateUnlike } = videoSlice.actions;
export default videoSlice.reducer;

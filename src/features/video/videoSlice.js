import { getVideo } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};

export const updatedLike = createAsyncThunk(
    "video/updatedLike",
    async ({ id, likes }) => {
        const response = await fetch(`http://localhost:9000/videos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                likes: likes + 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const likedV = await response.json();
        return likedV;
    }
);
export const updatedUnLike = createAsyncThunk(
    "video/updatedLike",
    async ({ id, unlikes }) => {
        const response = await fetch(`http://localhost:9000/videos/${id}`, {
            method: "PATCH",
            body: JSON.stringify({
                unlikes: unlikes + 1,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        const likedV = await response.json();
        console.log(likedV);
        return likedV;
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
            state.video.likes++;
        },
        updateUnlike: (state) => {
            state.video.unlikes++;
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
            })
            .addCase(updatedLike.fulfilled, (state, action) => {
                state.video = action.payload;
            });
    },
});

export const { updateLike, updateUnlike } = videoSlice.actions;
export default videoSlice.reducer;

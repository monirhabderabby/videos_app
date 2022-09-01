const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    status: "",
    id: null,
};

// pagination slice
const LikesUnlikesSlice = createSlice({
    name: "LikesUnlikes",
    initialState,
    reducers: {
        LikesUnlikes: (state, action) => {
            state.status = action.payload.status;
            state.id = action.payload.id;
        },
    },
});

export const { LikesUnlikes } = LikesUnlikesSlice.actions;
export default LikesUnlikesSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    author: "",
};

const filterByAuthorSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setFilterByAuthor: (state, action) => {
            state.author = action.payload;
        },
    },
});

export const { setFilterByAuthor } = filterByAuthorSlice.actions;

export default filterByAuthorSlice.reducer;

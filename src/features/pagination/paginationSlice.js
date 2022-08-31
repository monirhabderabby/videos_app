const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    page: 1,
};

// pagination slice
const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        paginateTo: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const { paginateTo } = paginationSlice.actions;
export default paginationSlice.reducer;

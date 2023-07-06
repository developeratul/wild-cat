import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    selected: "A",
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        select: (state, action: PayloadAction<string>) =>
        {
            console.log("appSlice.select: " + action.payload);
            return {
                selected: action.payload,
            }
        }
    }
});

export const { select } = appSlice.actions;

export default appSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedRoom: null,
};

const mainDataSlice = createSlice({
  name: "Main Data",
  initialState: initialState,
  reducers: {
    setSelectedRoom: (state, action) => {
      state.selectedRoom = action.payload;
    },
  },
});

export default mainDataSlice.reducer;
export const {
  setSelectedRoom,
} = mainDataSlice.actions;

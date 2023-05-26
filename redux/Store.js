import { configureStore } from "@reduxjs/toolkit";
import mainDataSlice from "./mainDataSlice";

const Store = configureStore({
  reducer: {
    mainReducer: mainDataSlice,
  },
});


export default Store
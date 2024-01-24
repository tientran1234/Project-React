import { configureStore } from "@reduxjs/toolkit";
import filmSlice from "./slices/film.jsx"
export default configureStore({
    reducer:{
        film:filmSlice,
    }
})
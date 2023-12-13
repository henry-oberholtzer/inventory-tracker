import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const store = configureStore({
	reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default store;

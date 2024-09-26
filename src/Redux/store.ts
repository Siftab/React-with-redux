
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import logger from "./middlewares/logger";


const store = configureStore({

    reducer:{
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
}
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export const reduxStore = store
import {PlayersSlice} from "./reducers/PlayersSlice";
import {TeamsSlice} from "./reducers/TeamsSlice";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        players: PlayersSlice,
        teams: TeamsSlice
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;
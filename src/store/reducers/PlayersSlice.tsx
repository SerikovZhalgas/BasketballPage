import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PlayersType = {
    first_name: string
    page: number
    full_name: string
    last_name: string
    is_active: string
    per_page: number
}

type PlayersState = {
    list: PlayersType[]
    loading: boolean
    per_page: number
    page: number
    error: string
}

const initialState: PlayersState= {
    list: [],
    loading: false,
    per_page: 50,
    page: 1,
    error: ''
}

const slice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        playersFetching(state){
            state.loading = true
        },
        playersFetchingSuccess(state, action: PayloadAction<PlayersType[]>){
            state.loading = false
            state.error = ''
            state.list = action.payload
        },
        playersFetchingError(state, action: PayloadAction<string>){
            state.loading = false
            state.error = action.payload
        }
    }
})

export const PlayersSlice = slice.reducer
export const {playersFetching, playersFetchingSuccess, playersFetchingError} = slice.actions
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type TeamsType = {
    id: number
    state: string
    full_name: string
    year_founded: string
    abbreviation: string
    city: string
    nickname: string
}

type TeamsState = {
    list: TeamsType[]
    loading: boolean
    per_page: number
    page: number
    error: string
}

const initialState: TeamsState = {
    list: [],
    loading: false,
    per_page: 5,
    page: 1,
    error: ''
}

const slice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        teamsFetching(state){
            state.loading = true
        },
        teamsFetchingSuccess(state, action: PayloadAction<TeamsType[]>){
            state.loading = false
            state.error = ''
            state.list = action.payload
        },
        teamsFetchingError(state, action: PayloadAction<string>){
            state.loading = false
            state.error = action.payload
        }
    }
})

export const TeamsSlice = slice.reducer
export const {teamsFetching, teamsFetchingSuccess, teamsFetchingError} = slice.actions

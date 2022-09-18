import {playersAPI, teamsAPI} from "../../api/api";
import {AppDispatch} from "../store";
import {teamsFetching, teamsFetchingError, teamsFetchingSuccess} from "./TeamsSlice";
import {playersFetching, playersFetchingError, playersFetchingSuccess} from "./PlayersSlice";

export const getTeamsThunk = (per_page: number, page: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(teamsFetching())
        const data = await teamsAPI.getTeams(per_page, page)
        dispatch(teamsFetchingSuccess(data))
    } catch (e) {
        let errorMessage = "Failed to do something exceptional";
        if (e instanceof Error) {
            errorMessage = e.message;
        }
        dispatch(teamsFetchingError(errorMessage))
    }
}

export const getPlayersThunk = (per_page: number, page: number) => async function (dispatch: AppDispatch) {
    try {
        dispatch(playersFetching())
        const data = await playersAPI.getPlayers(per_page, page)
        dispatch(playersFetchingSuccess(data))
    } catch (e) {
        let errorMessage = "Failed to do something exceptional";
        if (e instanceof Error) {
            errorMessage = e.message;
        }
        dispatch(playersFetchingError(errorMessage))
    }
}
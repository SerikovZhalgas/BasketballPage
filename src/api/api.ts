import axios from "axios";
import {TeamsType} from "../store/reducers/TeamsSlice";
import {PlayersType} from "../store/reducers/PlayersSlice";

const instance = axios.create({
    baseURL: 'https://nba-stats4.p.rapidapi.com/',
    headers:{
        'X-RapidAPI-Key': 'c247b365b7msh2a5be13d27a4ca5p157656jsn81919180c6c8',
        'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com'
    }
})

export const teamsAPI = {
    getTeams(per_page: number, page: number){
        return instance.get<TeamsType[]>(`teams/?per_page=${per_page}&page=${page}`, )
            .then(response=>response.data)
    }
}

export const playersAPI = {
    getPlayers(per_page: number, page: number) {
        return instance.get<PlayersType[]>(`players/?per_page=${per_page}&page=${page}`)
            .then(response => response.data)
    }
}
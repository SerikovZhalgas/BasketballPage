import React from 'react'
import Error404 from "./Error404";
import {About} from "../About/About";
import {Navigate, Route, Routes} from "react-router-dom";
import {Teams} from "../Teams/Teams";
import {Players} from "../Players/Players";

export const PATH = {
    TEAMS: '/teams',
    PLAYERS: '/players',
    ABOUT: '/about'
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/*'} element={<Navigate to={PATH.TEAMS}/>}/>

                <Route path={PATH.TEAMS} element={<Teams/>}/>
                <Route path={PATH.PLAYERS} element={<Players/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={s.items}>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/teams'}>NBA Teams</NavLink>
            </span>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/players'}>NBA Players</NavLink>
            </span>
            <span className={s.item}>
                <NavLink className={s.textColor} to={'/about'}>About</NavLink>
            </span>
            <span className={s.item}>
                <span className={s.kub}></span>
            </span>
        </div>
    )
}

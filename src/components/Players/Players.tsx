import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hook";
import {Player} from "./Player/Player";
import {getPlayersThunk, getTeamsThunk} from "../../store/reducers/ActionCreators";
import {Preloader} from "../common/Preloader/Preloader";
import styles from "../Players/Players.module.css";

export const Players = () => {
    const players = useAppSelector(state => state.players)
    const dispatch = useAppDispatch()
    const {list, page, per_page, loading} = {...players}

    let pagesCount = Math.ceil(per_page / page)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(players)
    const onPageChanged = (pageNumber: number) => {
        dispatch(getPlayersThunk(per_page, pageNumber))
    }

    useEffect(() => {
        dispatch(getPlayersThunk(per_page, page))
    }, [])

    return (
        <div>
            {loading
                ? <Preloader/>
                : <div className={styles.teamsPage}>
                    {pages.map((p, index) => {
                        return <span
                            key={index}
                            className={page === p ? styles.selectedPage : ''}
                            onClick={() => {
                                onPageChanged(p)
                            }}
                        >{p}</span>
                    })}
                    {list.map((player,index) => {
                        return <Player
                            key={index}
                            {...player}
                        />
                    })}
                </div>
            }
        </div>
    );
}
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hook";
import {Team} from "./Team/Team";
import styles from './Teams.module.css'
import {Preloader} from "../common/Preloader/Preloader";
import {getTeamsThunk} from "../../store/reducers/ActionCreators";

export const Teams = () => {
    const teams = useAppSelector(state => state.teams)
    const dispatch = useAppDispatch()
    const {list, page, per_page, loading} = {...teams}

    let pagesCount = Math.ceil(per_page / page)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    console.log(teams)
    const onPageChanged = (pageNumber: number) => {
        dispatch(getTeamsThunk(per_page, pageNumber))
    }

    useEffect(() => {
        dispatch(getTeamsThunk(per_page, page))
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
                    {list.map(team => {
                        return <Team
                            key={team.id}
                            {...team}
                        />
                    })}
                </div>
            }
        </div>
    );
}
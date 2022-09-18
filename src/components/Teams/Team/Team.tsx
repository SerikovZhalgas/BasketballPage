import {TeamsType} from "../../../store/reducers/TeamsSlice";

export const Team = (props:TeamsType) => {
    const {id, state, full_name, year_founded, abbreviation, city,nickname} = {...props}

    return <div>
        {state} {full_name} {year_founded} {abbreviation} {city} {nickname}
    </div>
}
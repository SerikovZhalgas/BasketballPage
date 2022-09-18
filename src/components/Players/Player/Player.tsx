import {PlayersType} from "../../../store/reducers/PlayersSlice";

export const Player = (props: PlayersType) => {
    const {first_name, page, full_name, last_name, is_active, per_page} = {...props}

    return <div>
        {first_name} {page} {full_name} {last_name} {is_active} {per_page}
    </div>
}
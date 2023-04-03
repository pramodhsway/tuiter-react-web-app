import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ConditionalDislike = ({tuit}) => {
    const dispatch = useDispatch();
    const dislikeTuitHandler = (tuit) => {
        const updatedTuit = {
            ...tuit
        }
        updatedTuit.dislikes = updatedTuit.disliked ? updatedTuit.dislikes - 1 : updatedTuit.dislikes + 1
        updatedTuit.disliked = !updatedTuit.disliked;
        dispatch(updateTuitThunk(updatedTuit));
    }
    return (
        <span onClick={() => dislikeTuitHandler(tuit)}>
            {
                tuit.disliked &&
                <FontAwesomeIcon icon="fa-solid fa-thumbs-down" color="red"/>
            }
            {
                !tuit.disliked &&
                <FontAwesomeIcon icon="fa-solid fa-thumbs-down"/>
            }

            &nbsp;{tuit.dislikes}
        </span>
    );
}
export default ConditionalDislike;
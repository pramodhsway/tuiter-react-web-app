import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../tuits/tuits-reducer";
import {updateTuitThunk}
    from "../../services/tuits-thunks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
import { faHeart as faregHeart } from '@fortawesome/fontawesome-free-regular'


const ConditionalLike = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        const updatedTuit = {
            ...tuit
        }
        updatedTuit.likes = updatedTuit.liked ? updatedTuit.likes - 1 : updatedTuit.likes + 1
        updatedTuit.liked = !updatedTuit.liked;
        dispatch(updateTuitThunk(updatedTuit));
    }
    return (
    <span onClick={() => likeTuitHandler(tuit)}>
        {
            tuit.liked &&
            <FontAwesomeIcon icon={faHeart} color="red"/>
            // <i className="fa fa-heart" style={{color: 'red'}}></i>
        }
        {
            !tuit.liked &&
            <FontAwesomeIcon icon={faregHeart}/>
            // <i className="fa-regular fa-heart"></i>
        }

        &nbsp;{tuit.likes}
    </span>
);
}
export default ConditionalLike;
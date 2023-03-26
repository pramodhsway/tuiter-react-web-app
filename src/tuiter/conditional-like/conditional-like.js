import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../tuits/tuits-reducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/fontawesome-free-solid'
import { faHeart as faregHeart } from '@fortawesome/fontawesome-free-regular'


const ConditionalLike = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    };
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
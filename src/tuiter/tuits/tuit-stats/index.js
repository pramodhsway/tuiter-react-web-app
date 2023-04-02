import React, {}  from 'react';
import ConditionalLike from "../../conditional-like/conditional-like";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faRetweet, faShare } from '@fortawesome/fontawesome-free-solid'
import { faComment } from '@fortawesome/fontawesome-free-regular'



const TuitStats = (
    {
        post = {
            "replies": "0",
            "retuits": "0",
            "likes": "0",
        }
    }
) => {
    return(
        <div className="container ps-5">
            <div className="row">
                <div className="col-sm">
                <FontAwesomeIcon icon={faComment}/>
                    &nbsp;{post.replies}
                </div>
                <div className="col-sm">
                <FontAwesomeIcon icon={faRetweet}/>
                    <i className="fa-solid fa-retweet"></i>
                    &nbsp;{post.retuits}
                </div>
                <div className="col-sm">
                    <ConditionalLike tuit={post}/>
                </div>
                <div className="col-sm">
                <FontAwesomeIcon icon={faShare}/>
                    <i className="fa-solid fa-download"></i>
                </div>
            </div>
        </div>
    );
};
export default TuitStats;
import React, {}  from 'react';
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
    const itemsArray = useSelector(state => state.tuits)
    return(
       <ul className="list-group">
         {
           itemsArray.map(post =>
             <TuitItem
               key={post._id} post={post}/> )
         }
       </ul>
     );
};
export default TuitsList;
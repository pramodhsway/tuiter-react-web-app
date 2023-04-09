import React, {}  from 'react';
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";
import TuitStats from "../tuit-stats/index";
const TuitItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "tesla.jpg"
   }
 }
) => {
  const imageBorder = {
    "border-radius": "3%"
  }
  const indicator = post.liked;
  var type = "fa-regular";
  if(indicator==true){
     type = "fa-solid";
  }
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
  <li className="list-group-item">
      <div className="row">
        <div className="col-1 mt-1 mb-1 me-2">
          <img className="rounded-circle" height={48} width={48} src={require(`../../images/${post.image}`)} alt="side-icon"/>
        </div>
        <div className="col-10 mt-1 mb-1">
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(post._id)}></i>
          <div className="fw-bold">{post.userName}</div>
          <div>{post.handle}&nbsp;.&nbsp;{post.time}</div>
        </div>
        <div className="col-12 ps-5">
          <div className="row-cols-11">{post.tuit}</div>
        </div>
        <TuitStats
            key={post._id} post={post}/>
      </div>
  </li>
);
};
export default TuitItem;
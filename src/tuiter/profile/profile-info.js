import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const tuitColor = {
    color: 'gray',
    fontsize: "20px",
};
const profilePic = {
    width:'130px',
    height:'130px',
    padding:'10px',
    borderColor: 'black',
    borderWidth:'20px',
    float:'top'}
const editButton = {
    marginTop: '20px',
    backgroundColor:'inherit',
    textAlign:'center',
    fontSize:'small',
    color: 'black',
    borderRadius:'50px',
    width: '90%',
    height: '40px',
    borderColor:'black',
    fontWeight:'bolder',
};
const ProfileItem = () => {
    const todos = useSelector(state => state.profile);
    return(
        <div className="col-12">
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/home">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                    </Link>
                </div>
                <div className="col-11">
                    <div className="row">
                        <h5>{todos.name}</h5>
                    </div>
                    <div className="row">
                        <p className="tuits-color"
                           style={tuitColor}>{todos.tuitNums} tuits</p>
                    </div>
                </div>
            </div>
            <div className="row ps-3">
                <div className="col-12">
                    <div className="row">
                        <img src={require(`../images/${todos.bannerPicture}`)}/>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <img className="rounded-circle" src={require(`../images/${todos.profilePicture}`)}
                                 style={profilePic}/>
                        </div>
                            <div className="col-3">
                                <Link to="/tuiter/edit-profile">
                                <button style={editButton}>Edit Profile</button>
                                </Link>
                            </div>
                    </div>
                    <div className="row">
                        <h5 style={{fontStyle:'bolder'}}>{todos.name}</h5>
                        <p style={{color:'gray',fontSize:'15px'}}>{todos.handle}</p>
                    </div>
                    <div className="row">
                        <p>{todos.bio}</p>
                    </div>
                    <p style={{color:'gray'}}>
                    <FontAwesomeIcon icon="fas fa-map-marker-alt" />
                        <i className="fa-solid fa-location-dot">&nbsp; {todos.location} &nbsp;&nbsp;</i>
                        <FontAwesomeIcon icon="fas fa-birthday-cake" />
                        <i className="fas fa-birthday-cake"> &nbsp; {todos.dateOfBirth} &nbsp;&nbsp;</i>
                        <FontAwesomeIcon icon="fa-solid fa-calendar" />
                        <i className="fa-solid fa-calendar"> &nbsp; {todos.dateJoined}</i>
                    </p>
                    <p style={{fontWeight:'20'}}>
                        {todos.followingCount} Following, {todos.followersCount} Followers
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ProfileItem;
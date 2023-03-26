import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile}
    from "../profile/profile-reducer";
import {Link} from "react-router-dom";
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
const saveButton = {
    backgroundColor: '#0d6efd',
    textAlign: 'center',
    fontSize:'small',
    color: 'white',
    borderRadius:'50px',
    width: '100%',
    height: '40px',
    borderColor:'#0d6efd',
    fontWeight:'bolder',
    marginBottom:'10px'
};
const EditProfileItem = () => {
    const todos
        = useSelector(state => state.profile);
    const [profileChange, setProfileChange] = useState(
        {
            name: todos.name,
            tuitNums: todos.tuitNums,
            handle:todos.handle,
            profilePicture: todos.profilePicture,
            bannerPicture: todos.bannerPicture,
            bio: todos.bio,
            website: todos.website,
            location: todos.location,
            dateOfBirth: todos.dateOfBirth,
            followersCount: todos.followersCount,
            dateJoined: todos.dateJoined,
            followingCount: todos.followingCount
        }
    );
    const dispatch = useDispatch();
    const todoChangeLastName = (event) => {
        const newName = event.target.value;
        const newProfile = {
            ...profileChange,
            name: newName
        };
        setProfileChange(newProfile);
    }
    const todoChangeBio = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            bio: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeLocation = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            location: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeDOB = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            dateOfBirth: name
        };
        setProfileChange(newProfile);
    }
    const todoChangeWebsite = (event) => {
        const name = event.target.value;
        const newProfile = {
            ...profileChange,
            website: name
        };
        setProfileChange(newProfile);
    }
    const assertChanges = (event) => {
        dispatch({type: 'change-profile', profileChange})
    }
    return(
        <>
            <div className="col-12">
                <div className="row">
                    <div className="col-1">
                        <Link to="/tuiter/profile">
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
                            <i className="fa-solid fa-arrow-left"></i>
                        </Link>
                    </div>
                    <div className="col-11">
                        <div className="row">
                            <div className="col-10">
                                <h5>{todos.name}</h5>
                            </div>
                            <div className="col-2">
                                <Link to="/tuiter/profile">
                                    <button onClick={assertChanges} style={saveButton}>
                                        Save
                                    </button>
                                </Link>
                            </div>
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
                        <div className="col-12">
                            <div className="row">
                                <h6 className="ps-lg-1">Name</h6>
                                <input value={profileChange.name} onChange={todoChangeLastName} className="form-control"/>
                            </div>
                            <br/>
                            <div className="row">
                                <h6 className="ps-lg-1">Bio</h6>
                                <input value={profileChange.bio} onChange={todoChangeBio} className="form-control"/>
                            </div>
                            <br/>
                            <div className="row">
                                <h6 className="ps-lg-1">Location</h6>
                                <input value={profileChange.location} onChange={todoChangeLocation} className="form-control"/>
                            </div>
                            <br/>
                            <div className="row">
                                <h6 className="ps-lg-1">Date of Birth</h6>
                                <input value={profileChange.dateOfBirth} onChange={todoChangeDOB} className="form-control"/>
                            </div>
                            <br/>
                            <div className="row"></div>
                            <h6 className="ps-lg-1">Website</h6>
                            <input value={profileChange.website} onChange={todoChangeWebsite} className="form-control"/>
                            <div className="float-left mt-2 " align="left">
                                <span className="wd-text-gray">
                                <FontAwesomeIcon icon="fas fa-map-marker-alt" /> 
                                <i className="fas fa-map-marker-alt"></i></span>
                                <span className="ms-2 wd-text-gray">{todos.location}</span>
                                <span className="ms-5 wd-text-gray">
                                <FontAwesomeIcon icon="fas fa-birthday-cake" />  
                                    <i className="fas fa-birthday-cake"></i> </span>
                                <span className="ms-2 wd-text-gray">{todos.dateOfBirth}</span>
                                <span className="ms-5 wd-text-gray">
                                <FontAwesomeIcon icon="fas fa-calendar-alt" />  
                                    <i className="fas fa-calendar-alt"></i> </span>
                                <span className="ms-2 wd-text-gray">{todos.dateJoined}</span>
                            </div>
                            <div className="text-start mt-3">
                                <span >{todos.followingCount}</span>
                                <span className="ms-2 wd-text-gray">Following</span>
                                <span className="ms-5">{todos.followersCount}</span>
                                <span className="ms-2 wd-text-gray">Followers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    const tracks = state
    return { tracks }
}
export default EditProfileItem;
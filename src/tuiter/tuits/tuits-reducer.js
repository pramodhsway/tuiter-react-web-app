import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { createTuitThunk, deleteTuitThunk, findTuitsThunk}
  from "../../services/tuits-thunks";

const currentUser = {
    "userName": "Nasa",
    "handle": "@nasa",
    "image": "spacex2.jpg",
};

const initialState = {
    tuits: [],
    loading: false
 }
 

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
            state.loading = true
            state.tuits = []
    },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.tuits = payload
    },
    [findTuitsThunk.rejected]:
        (state, action) => {
            state.loading = false
            state.error = action.error
    },
    [deleteTuitThunk.fulfilled] :
    (state, { payload }) => {
    state.loading = false
    state.tuits = state.tuits
      .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)
    },
    },
    reducers: {
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     },
    //     likeTuit(state, action) {
    //         const currentTuit = state.find((tuit) =>
    //             tuit._id === action.payload._id)

    //         if(currentTuit.liked === true) {
    //             currentTuit.liked = false;
    //             currentTuit.likes--;
    //         } else {
    //             currentTuit.liked = true;
    //             currentTuit.likes++;
    //         }
    //     }
    // 
    }
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
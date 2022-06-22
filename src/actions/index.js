import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";
// action creator


// fetch post and user to fetch users only one  time

export const fetchPostAndUsers = () => {
    return async function(dispatch,getState){
        await dispatch(fetchPosts())
        
        // console.log((getState().posts));
        // const userIds = _.uniq(_.map(getState().posts,'userId'))
        // userIds.forEach(function(id){
        //     return dispatch(fetchUser(id));
        // })

        _.chain(getState().posts)
        .map("userId")
        .uniq()
        .forEach(function(id){ return dispatch(fetchUser(id))})
        .value()
    }
}


export const fetchPosts = () => {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get("/posts");
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        })
    }
};


export const fetchUser = (id) => {
    return async function (dispatch) {
        const response = await jsonPlaceholder.get(`/users/${id}`);
        dispatch({
            type:"FETCH_USER",
            payload:response.data
        })
    }
}


// Memoize function approach
// export const fetchUser = function (id) {
//     return function (dispatch) {
//         _fetchUser(id, dispatch)
//     }
// }

// // memoize function from lodash to fetch request one time
// const _fetchUser = _.memoize(async function (id, dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data
//     })
// })
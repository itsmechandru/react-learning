const postsReducer = (state = [], action) => {
    // if (action.type === "FETCH_POSTS") {
    //     return action.payload
    // }else{
    //     return state;
    // }
    switch (action.type) {
        case "FETCH_POSTS":
            return action.payload;

        default:
            return state;

    }
}

export default postsReducer;


// Reducer function rules
// Do not mutate
// Arrays

//Remove element from Arrays
// BAD
// state.pop()
// GOOD
// state.filter(function(element){return element !== "HI"})

// Add Element to Array
// BAD
// state.push("Hi")
// GOOD
// [...state,"Hi"]

// Replacing Element to Array
// BAD
// state[0]="Hi"
// GOOD
// state.map(function(element){
//     return element === "hi" ? "bye" : element
// })
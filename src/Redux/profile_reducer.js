let initialState = {
    posts: [
        {id: 1, message: "privet,brat", quantity__like: "15", quantity__dislike: "1"},
        {id: 2, message: "it`s my new post", quantity__like: "15", quantity__dislike: "1"},
        {id: 3, message: "hi,hi", quantity__like: "11", quantity__dislike: "11"},
        {id: 4, message: "it`s my no new post", quantity__like: "133", quantity__dislike: "12"},
    ],
    newPostText: 'privet',
};

const profile_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD-POST":
        {
            let postNew = {
                id: 5,
                message: state.newPostText,
                quantity__like: 0,
                quantity__dislike: 0,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(postNew);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case "UPDATE-NEW-POST-TEXT":
        {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"});
export const updatePostActionCreator = (text) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text,
    }
};

export default profile_reducer;
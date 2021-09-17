// import profile_reducer from "./profile_reducer";
// import dialogs_reducer from "./dialogs_reducer";
// import friends_reducer from "./friends_reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Zdarova,brat", quantity__like: "15", quantity__dislike: "1"},
                {id: 2, message: "it`s my new post", quantity__like: "15", quantity__dislike: "1"},
                {id: 3, message: "hi,hi", quantity__like: "11", quantity__dislike: "11"},
                {id: 4, message: "it`s my no new post", quantity__like: "133", quantity__dislike: "12"},
            ],
            // newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Andrei",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NbWT_0iI1ZqkI-WyYO7GVIqDlouNdXNh9g&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Arbuz",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjpPCSmbEz9MbdmDRHnq0A-r1IgQ2JecU5dA&usqp=CAU"
                },
                {
                    id: 3,
                    name: "OG",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQml5vl4P8_D1tldwKWtWY_QJQlfN1UY9okfvJSHNj_yBMG-2V0prJ8kv9i4zjta13rEo&usqp=CAU",
                },
                {
                    id: 4,
                    name: "Brat",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlifdudAs7kSG1F3zolq2ODIU1OeZIgP7l5HIypleuXKHi4n_Uzq-Fy1qURcGWAIcnPc&usqp=CAU",
                },
                {
                    id: 5,
                    name: "Sveta",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL3kvWFyDgvuMhPLmoKop2a2p_g7RRe5M6RqlFz5Ko5z90STdbWdfgdkSOLcc4ejGdBxc&usqp=CAU",
                },
                {
                    id: 6,
                    name: "Yana",
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCM0e78vHS_2eGfz2aAbkSebcPeDk69RPr-mSNpsGdA33Bd2CfEmsDax97ixfFFgbja6Q&usqp=CAU",
                },
            ],
            messages: [
                {id: 1, message: "yo"},
                {id: 2, message: "ae"},
                {id: 3, message: "OG"},
                {id: 4, message: "hi"},
                {id: 5, message: "privet"},
                {id: 6, message: "normalno"},
            ],
            newMessageText: "",
        },
        friendsPage: {
            friend:
                [
                    {img: " ", name: "4elover", id: 1,},
                    {img: " ", name: "Obama", id: 2,},
                    {img: " ", name: "Oleg", id: 3,},
                ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log("перересовка");
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profile_reducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
        this._state.friendsPage = friends_reducer(this._state.friendsPage, action);

        this._callSubscriber(this._state);
    },
};


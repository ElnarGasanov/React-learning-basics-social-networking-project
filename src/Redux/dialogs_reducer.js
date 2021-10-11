let initialState = {
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
    newMessageText: "alo",
};

export const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let messageNew = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: messageNew}],
                newMessageText: "",
            }
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newTextDialogs,
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: "ADD-MESSAGE"
    }
};
export const updateMessageActionCreator = (text) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT", newTextDialogs: text
    }
};

export default dialogs_reducer;
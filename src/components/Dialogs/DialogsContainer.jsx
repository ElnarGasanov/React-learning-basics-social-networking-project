import React from "react";
import {addMessageActionCreator, updateMessageActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageText: state.dialogsPage.newMessageText,
        authMe: state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (body) => {
            dispatch(updateMessageActionCreator(body));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        },

    }
};


export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
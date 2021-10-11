import React from "react";
import NavBar from "./NavBar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friend: state.friendsPage.friend,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NavBarContainer = connect ( mapStateToProps, mapDispatchToProps )(NavBar);

export default NavBarContainer;
import React from "react";
import NavBar from "./NavBar";


const NavBarContainer = (props) => {

    let state = props.store.getState().friendsPage.friend;

    return (
        <NavBar state={state}/>
    );
}
export default NavBarContainer;
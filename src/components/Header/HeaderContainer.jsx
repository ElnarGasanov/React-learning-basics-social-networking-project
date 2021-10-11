import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authMe, setAuthUserData, setLoginUser} from "../../Redux/auth_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();

        //было
        // usersAPI.authMe().then(response => {
        //         if(response.data.resultCode === 0) {
        //             let {id, email, login} = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //             usersAPI.getMyData(id).then(response => {
        //                     this.props.setLoginUser(response.data);
        //                 })
        //         }
        //     })
    }

    render() {
        return(
            <Header {...this.props} loginUser={this.props.loginUser}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    loginUser: state.auth.loginUser,
})

export default connect (mapStateToProps, {setAuthUserData,setLoginUser,authMe }) (HeaderContainer);
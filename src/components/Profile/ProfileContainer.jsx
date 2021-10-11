import React from "react";
import Profile from "./Profile";
import {userProfile} from "../../Redux/profile_reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19778
        }

        //стало
        this.props.userProfile(userId);

        //было
        // usersAPI.userProfile(userId).then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {userProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
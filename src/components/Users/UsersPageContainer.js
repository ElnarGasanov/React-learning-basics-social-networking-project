import React from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers, getUsersCurrent,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow
} from "../../Redux/users_reducer";
import UsersPage from "./UsersPage";
import Preloader from "../../common/Preloader";


class UsersContainer extends React.Component {
    componentDidMount() {
        // стало после redux-thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        // было
        // this.props.toggleIsFetching(true);
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // })
    }
    onChangedCurrentPage = (pageNumber) => {
        //стало после redux-thunk
        this.props.getUsersCurrent(pageNumber, this.props.pageSize);

        //было
        // this.props.toggleIsFetching(true);
        // this.props.setCurrentPage(pageNumber);
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersPage totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage} users={this.props.users}
                           onChangedCurrentPage={this.onChangedCurrentPage} follow={this.props.follow}
                           unfollow={this.props.unfollow} followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


let UsersPageContainer =
    connect(mapStateToProps, {
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers, follow, unfollow,getUsersCurrent
    },)
    (UsersContainer);

export default UsersPageContainer;
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';

export class UserHeader extends Component {
    // componentDidMount() {
    //     this.props.fetchUser(this.props.userIdU)
    // }

    render() {
       const user = this.props.user;
        // console.log(user);
        if (!user) {
            return null;
        } else {
            return (
                <div className='header'>{user.name}</div>
            )
        }
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        user: state.users.find(function(user){
            return user.id === ownProps.userIdU
        })
    };
}

export default connect(
    mapStateToProps,
    
)(UserHeader);
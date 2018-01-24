import React, { Component } from 'react';

class Profile extends Component {
    render() {
      return (
        <div className="profile">
          <h1>{this.props.username}</h1>
          <h4>Public Repos: {this.props.repos}</h4>
          <img src={this.props.userAvatar} alt="github profile"/>
        </div>
        )
    }
  }

  export default Profile;
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.email}</p>
        <Image key={this.props.user.key} source={this.props.user.avatar} alt="User avatar" />
      </div>
    )
  }
}

export default UserProfile;
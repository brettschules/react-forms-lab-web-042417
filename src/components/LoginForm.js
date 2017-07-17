import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  handleInputChangePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  stop = event => {
    event.preventDefault()
    if (this.state.username.length !== 0 && this.state.password !==0) {
        this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.stop}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value = {this.state.username} onChange={this.handleInputChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value = {this.state.password} onChange={this.handleInputChangePassword}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

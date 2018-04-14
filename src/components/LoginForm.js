import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

// Instead of these two functions below: 

  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value,
  //   });
  // }
  //
  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value,
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      return;
    }
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Login from "./Login";
import Register from "./Register";

class Loginscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginscreen: [],
      loginmessage: "",
      buttonLabel: "Register",
      isLogin: true
    };
  }

  componentWillMount() {
    var loginscreen = [];
    loginscreen.push(
      <Login parentContext={this} appContext={this.props.parentContext} />
    );
    var loginmessage = "Not registered yet ? Register now : ";
    this.setState({
      loginmessage: loginmessage,
      loginscreen: loginscreen
    });
  }

  handleClick(event) {
    var loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(
        <Register parentContext={this} appContext={this.props.parentContext} />
      );
      loginmessage = "Already registered? Go to login";
      this.setState({
        loginmessage: loginmessage,
        loginscreen: loginscreen,
        buttonLabel: "Login",
        isLogin: false
      });
    } else {
      var loginscreen = [];
      loginscreen.push(
        <Login parentContext={this} appContext={this.props.parentContext} />
      );
      loginmessage = "Not registered yet ? Register now :";
      this.setState({
        loginmessage: loginmessage,
        loginscreen: loginscreen,
        buttonLabel: "Register",
        isLogin: true
      });
    }
  }
  render() {
    return (
      <div className="Loginscreen">
        {this.state.loginscreen}
        <div>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div>
              <RaisedButton
                label={this.state.buttonLabel}
                primary={true}
                style={style}
                onClick={event => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Loginscreen;

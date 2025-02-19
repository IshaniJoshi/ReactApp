import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component } from "react";
import Component1 from "./Component1";

var data = require('./Data.json');
var flag=0;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleClick(event) {
    for (var i = 0; i < data.length; i++)
    {
      var obj = data[i];
      if(obj.username==this.state.username && obj.password==this.state.password)
{
  var uploadScreen = [];
  uploadScreen.push(
    <Component1
      name={this.state.username}
      appContext={this.props.appContext}
    />
  );
  this.props.appContext.setState({
    loginpage: [],
    uploadScreen: uploadScreen
  });
  flag=1;
  break;
}



    }

    if(flag==0)
    {
      alert("Incorrect username or password");
    }
    
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              hintText="Enter your password"
              floatingLabelText="Password"
              type="password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />

            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default Login;
